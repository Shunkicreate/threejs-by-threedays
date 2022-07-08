import { useStopwatch } from 'react-timer-hook';

const Clock = () => {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useStopwatch({ autoStart: true });
  return seconds + minutes * 60 + hours * 60 * 60  + days * 60 * 60 * 60
}

export default Clock