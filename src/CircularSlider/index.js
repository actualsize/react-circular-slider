import React, {useEffect, useReducer, useCallback, useRef} from 'react';
import window from 'global';
import PropTypes from "prop-types";
import reducer from "../redux/reducer";
import useEventListener from "../hooks/useEventListener";
import useIsServer from "../hooks/useIsServer";
import Knob from "../Knob";
import Labels from "../Labels";
import Svg from "../Svg";

const spreadDegrees = 360;
const knobOffset = {
    top: Math.PI / 2,
    right: 0,
    bottom: -Math.PI / 2,
    left: -Math.PI
};
const incrementKeyCodes = [87, 68, 38, 39]; //Keycodes for W, D, Up Arrow, Right Arrow
const decrementKeyCodes = [83, 65, 40, 37]; //Keycodes for S, A, Down Arrow, Left Arrow

const getSliderRotation = (number) => {
    if(number < 0) return -1;
    return 1;
};

const getRadians = (degrees) => {
    return degrees * Math.PI / 180;
};

const generateRange = (min, max) => {
    let rangeOfNumbers = [];
    for(let i = min; i <= max; i++) {
        rangeOfNumbers.push(i);
    }
    return rangeOfNumbers;
};

const labelDataIndex = (label, data) => {
    return data.indexOf(label);
}

const styles = ({
    circularSlider: {
        position: 'relative',
        display: 'inline-block',
        opacity: 0,
        outline: 'none',
        // transition: 'opacity 1s ease-in'
    },

    mounted: {
        opacity: 1
    },
});

const CircularSlider = ({
        label = 'ANGLE',
        width = 280,
        direction = 1,
        min = 0,
        max = 360,
        knobColor = '#4e63ea',
        knobSize = 36,
        knobPosition = 'top',
        highlightColor = 'yellow',
        labelColor = '#272b77',
        labelBottom = false,
        labelFontSize = '1rem',
        valueFontSize = '3rem',
        appendToValue = '',
        prependToValue = '',
        verticalOffset = '1.5rem',
        hideLabelValue = false,
        hideKnob = false,
        knobDraggable = true,
        progressColorFrom = '#80C3F3',
        progressColorTo = '#4990E2',
        progressSize = 8,
        trackColor = '#DDDEFB',
        trackSize = 8,
        data = [],
        dataIndex = 0,
        progressLineCap = 'round',
        renderLabelValue = null,
        isPeriodic = true,
        children,
        onChange = value => {},
        onHandleClick = value => {}
    }) => {
    const initialState = {
        mounted: false,
        isDragging: false,
        keyPressed: false,
        isFocused: false,
        width: width,
        radius: width / 2,
        knobPosition: knobPosition,
        label: 0,
        data: data,
        radians: 0,
        offset: 0,
        knob: {
            x: 0,
            y: 0,
        },
        dashFullArray: 0,
        dashFullOffset: 0
    };
    const isServer = useIsServer();
    const [state, dispatch] = useReducer(reducer, initialState);
    const circularSlider = useRef(null);
    const svgFullPath = useRef(null);
    const touchSupported = !isServer && ('ontouchstart' in window);
    const SLIDER_EVENT = {
        DOWN: touchSupported ? 'touchstart' : 'mousedown',
        UP: touchSupported ? 'touchend' : 'mouseup',
        MOVE: touchSupported ? 'touchmove' : 'mousemove',
        KEY_DOWN: 'keydown',
        KEY_UP: 'keyup',
        FOCUS_IN: 'focusin',
        FOCUS_OUT: 'focusout'
    };

    const setKnobPosition = useCallback((radians) => {
        const radius = state.radius - trackSize / 2;
        const offsetRadians = radians + knobOffset[knobPosition];
        let degrees = (offsetRadians > 0 ? offsetRadians
            :
            ((2 * Math.PI) + offsetRadians)) * (spreadDegrees / (2 * Math.PI));
        // change direction
        const dashOffset = (degrees / spreadDegrees) * state.dashFullArray;
        degrees = (getSliderRotation(direction) === -1 ? spreadDegrees - degrees : degrees);
        const pointsInCircle = (state.data.length - 1) / spreadDegrees;
        const currentPoint = Math.round(degrees * pointsInCircle);
        if(state.data[currentPoint] !== state.label) {
            // props callback for parent
            onChange(state.data[currentPoint]);
        }
        
        dispatch({
            type: 'setKnobPosition',
            payload: {
                dashFullOffset: getSliderRotation(direction) === -1 ? dashOffset : state.dashFullArray - dashOffset,
                label: state.data[currentPoint],
                knob: {
                    x: (radius * Math.cos(radians) + radius),
                    y: (radius * Math.sin(radians) + radius),
                }
            }
        });
        
    }, [state.radius, state.dashFullArray, state.data, state.label, trackSize, knobPosition, direction, onChange]);

    const onMouseDown = () => {
        onHandleClick();
        dispatch({
            type: 'onMouseDown',
            payload: {
                isDragging: true
            }
        });
    };

    const onMouseUp = () => {
        dispatch({
            type: 'onMouseUp',
            payload: {
                isDragging: false
            }
        });
    };

    const onMouseMove = useCallback((event) => {
        if (!state.isDragging) return;
        
        event.preventDefault();

        let touch;
        if (event.type === 'touchmove') {
            touch = event.changedTouches[0];
        }

        const offsetRelativeToDocument = (ref) => {
            const rect = ref.current.getBoundingClientRect();
            const scrollLeft = !isServer && ((window?.pageXOffset ?? 0) || (document?.documentElement?.scrollLeft ?? 0));
            const scrollTop = !isServer && ((window?.pageYOffset ?? 0) || (document?.documentElement?.scrollTop ?? 0));
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
        };

        const mouseXFromCenter = (event.type === 'touchmove' ? touch.pageX : event.pageX) -
            (offsetRelativeToDocument(circularSlider).left + state.radius);
        const mouseYFromCenter = (event.type === 'touchmove' ? touch.pageY : event.pageY) -
            (offsetRelativeToDocument(circularSlider).top + state.radius);

        const radians = Math.atan2(mouseYFromCenter, mouseXFromCenter);
        
        const offsetRadians = radians + knobOffset[knobPosition];
        let degrees = (offsetRadians > 0 ? offsetRadians
            :
            ((2 * Math.PI) + offsetRadians)) * (spreadDegrees / (2 * Math.PI));
        degrees = (getSliderRotation(direction) === -1 ? spreadDegrees - degrees : degrees);
        const pointsInCircle = (state.data.length - 1) / spreadDegrees;
        const currentPoint = Math.round(degrees * pointsInCircle);
        const newLabel = state.data[currentPoint]
        const quarterIndex = Math.round(state.data.length / 4)
        
        if (isPeriodic || (!(state.data.slice(0, quarterIndex).includes(state.label) && state.data.slice(3 * quarterIndex, state.data.length).includes(newLabel)) 
            && !(state.data.slice(0, quarterIndex).includes(newLabel) && state.data.slice(3 * quarterIndex, state.data.length).includes(state.label))))
        {
            setKnobPosition(radians);
        } 
        else if (state.data.slice(0, quarterIndex).includes(state.label) && state.data.slice(3 * quarterIndex, state.data.length).includes(newLabel))
        {
            setKnobPosition(-(knobOffset[state.knobPosition]*getSliderRotation(direction))+(state.offset*getSliderRotation(direction)));
        } 
        else if (state.data.slice(0, quarterIndex).includes(newLabel) && state.data.slice(3 * quarterIndex, state.data.length).includes(state.label)) 
        {
            setKnobPosition(-(knobOffset[state.knobPosition]*getSliderRotation(direction))-(state.offset*getSliderRotation(direction)));
        }
    }, [state.isDragging, state.radius, state.data, state.label, state.knobPosition, state.offset, knobPosition, direction, isPeriodic, isServer, setKnobPosition]);

    const onKeyUp = () => {
        dispatch({
            type: 'onKeyUp',
            payload: {
                keyPressed: false
            }
        });
    };

    const onKeyDown = useCallback((event) => {
        if (!(document.activeElement === circularSlider.current)) return;
        
        
        dispatch({
            type: 'onKeyDown',
            payload: {
                keyPressed: true
            }
        });
        const labelIndex = labelDataIndex(state.label, state.data);
        if (incrementKeyCodes.includes(event.keyCode)){
            event.preventDefault();
            if(labelIndex !== state.data.length - 1){
                const targetDegrees = (labelIndex + 1) * (360 / state.data.length);
                const targetRadians = getRadians(targetDegrees) - knobOffset[state.knobPosition] + state.offset;
                setKnobPosition(targetRadians);
            } 
        }
        
        if (decrementKeyCodes.includes(event.keyCode)){
            event.preventDefault();
            if(labelIndex !== 0){
                const targetDegrees = (labelIndex - 1) * (360 / state.data.length);
                const targetRadians = getRadians(targetDegrees) - knobOffset[state.knobPosition] + state.offset;
                setKnobPosition(targetRadians);
            }
        }
    }, [setKnobPosition, state.data, state.knobPosition, state.label, state.offset]);

    const onFocusIn = useCallback(()=>{
        if (document.activeElement === circularSlider.current){
            dispatch({
                type: 'onFocusIn',
                payload: {
                    isFocused: true
                }
            });
        }
    },[])

    const onFocusOut = useCallback(()=>{
        if (document.activeElement !== circularSlider.current){
            dispatch({
                type: 'onFocusOut',
                payload: {
                    isFocused: false
                }
            });
        }
    },[])

    // Get svg path length onmount
    useEffect(() => {
        dispatch({
            type: 'init',
            payload: {
                mounted: true,
                data: state.data.length ? [...state.data] : [...generateRange(min, max)],
                dashFullArray: svgFullPath.current.getTotalLength ? svgFullPath.current.getTotalLength() : 0,
            }
        });
        // eslint-disable-next-line
    }, [max, min]);

    // Set knob position
    useEffect(() => {
        const dataArrayLength = state.data.length;
        const knobPositionIndex = (dataIndex > dataArrayLength - 1) ? dataArrayLength - 1 : dataIndex;

        if(!!dataArrayLength) {
            const pointsInCircle = spreadDegrees / dataArrayLength;
            const offset = getRadians(pointsInCircle) / 2;

            dispatch({
                type: 'setInitialKnobPosition',
                payload: {
                    radians: Math.PI / 2 - knobOffset[state.knobPosition],
                    offset
                }
            });

            if(knobPositionIndex) {
                const degrees = getSliderRotation(direction) * knobPositionIndex * pointsInCircle;
                const radians = getRadians(degrees) - knobOffset[state.knobPosition];

                return setKnobPosition(radians+(offset*getSliderRotation(direction)));
            }
            setKnobPosition(-(knobOffset[state.knobPosition]*getSliderRotation(direction))+(offset*getSliderRotation(direction)));
        }

        // eslint-disable-next-line
    }, [state.dashFullArray, state.knobPosition, state.data.length, dataIndex, direction]);

    useEventListener(SLIDER_EVENT.MOVE, onMouseMove);
    useEventListener(SLIDER_EVENT.UP, onMouseUp);
    useEventListener(SLIDER_EVENT.KEY_DOWN, onKeyDown);
    useEventListener(SLIDER_EVENT.KEY_UP, onKeyUp);
    useEventListener(SLIDER_EVENT.FOCUS_IN, onFocusIn);
    useEventListener(SLIDER_EVENT.FOCUS_OUT, onFocusOut);

    const sanitizedLabel = label.replace(/[\W_]/g, "_");

    return (
        <div style={{...styles.circularSlider, ...(state.mounted && styles.mounted)}} ref={circularSlider} tabIndex={"0"}>
            <Svg
                width={width}
                label={sanitizedLabel}
                direction={direction}
                strokeDasharray={state.dashFullArray}
                strokeDashoffset={state.dashFullOffset}
                svgFullPath={svgFullPath}
                progressSize={progressSize}
                progressColorFrom={progressColorFrom}
                progressColorTo={progressColorTo}
                progressLineCap={progressLineCap}
                trackColor={trackColor}
                trackSize={trackSize}
                radiansOffset={state.radians}
            />
            {knobDraggable && (
                <Knob
                    isDragging={state.isDragging}
                    knobPosition={{ x: state.knob.x, y: state.knob.y }}
                    knobSize={knobSize}
                    knobColor={knobColor}
                    trackSize={trackSize}
                    hideKnob={hideKnob}
                    highlightColor={highlightColor}
                    onMouseDown={onMouseDown}
                    isFocused={state.isFocused}
                >
                    {children}
                </Knob>
            )}
            {renderLabelValue || (
                <Labels
                    label={label}
                    labelColor={labelColor}
                    labelBottom={labelBottom}
                    labelFontSize={labelFontSize}
                    verticalOffset={verticalOffset}
                    valueFontSize={valueFontSize}
                    appendToValue={appendToValue}
                    prependToValue={prependToValue}
                    hideLabelValue={hideLabelValue}
                    value={`${state.label}`}
                />
            )}
        </div>
    );
};

CircularSlider.propTypes = {
    label: PropTypes.string,
    width: PropTypes.number,
    direction: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    knobColor: PropTypes.string,
    knobPosition: PropTypes.string,
    highlightColor: PropTypes.string,
    hideKnob: PropTypes.bool,
    knobDraggable: PropTypes.bool,
    labelColor: PropTypes.string,
    labelBottom: PropTypes.bool,
    labelFontSize: PropTypes.string,
    valueFontSize: PropTypes.string,
    appendToValue: PropTypes.string,
    renderLabelValue: PropTypes.element,
    prependToValue: PropTypes.string,
    verticalOffset: PropTypes.string,
    hideLabelValue: PropTypes.bool,
    progressLineCap: PropTypes.string,
    progressColorFrom: PropTypes.string,
    progressColorTo: PropTypes.string,
    progressSize: PropTypes.number,
    trackColor: PropTypes.string,
    trackSize: PropTypes.number,
    data: PropTypes.array,
    dataIndex: PropTypes.number,
    isPeriodic: PropTypes.bool,
    onChange: PropTypes.func
};

export default CircularSlider;
