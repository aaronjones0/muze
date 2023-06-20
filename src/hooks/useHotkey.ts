import { useCallback, useEffect, useState } from 'react';

export default function useHotkey(
  key: string | undefined,
  onHotkeyPressed: () => void
) {
  const [hotkeyHintIsVisible, setHotkeyHintIsVisible] = useState(false);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.altKey && event.key === key) {
        event.stopPropagation();
        event.preventDefault();
        onHotkeyPressed();
      } else if (event.altKey && event.key === 'Alt') {
        // Only the Alt key is pressed:
        event.stopPropagation();
        event.preventDefault();
        setHotkeyHintIsVisible(true);
      }
    },
    [key, onHotkeyPressed]
  );

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    if (!event.altKey) {
      event.stopPropagation();
      event.preventDefault();
      setHotkeyHintIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!!key) {
      document.addEventListener('keydown', handleKeyDown);
    }
  }, [key, handleKeyDown]);

  useEffect(() => {
    if (!!key) {
      document.addEventListener('keyup', handleKeyUp);
    }
  }, [key, handleKeyUp]);

  return { hotkeyHintIsVisible };
}
