'use client';

import { useState, useEffect } from 'react';
import { Piano as ReactPiano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import SoundfontProvider from './SoundfontProvider';
import './types';

interface WebkitWindow extends Window {
  webkitAudioContext: typeof AudioContext;
}

const audioContext = typeof window !== 'undefined' ? new (window.AudioContext || (window as unknown as WebkitWindow).webkitAudioContext)() : null;
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

// Adjust note range for different screen sizes
const getMobileNoteRange = () => ({
  first: MidiNumbers.fromNote('c4'),
  last: MidiNumbers.fromNote('c5'),
});

const getDesktopNoteRange = () => ({
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('c5'),
});

const Piano = ({ width = 800 }) => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const noteRange = isMobile ? getMobileNoteRange() : getDesktopNoteRange();

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading || !audioContext) return null;

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: width,
        margin: '0 auto',
        mt: { xs: 2, md: 4 },
        '.ReactPiano__Key--natural': {
          backgroundColor: 'white',
          border: '1px solid #ccc',
          height: { xs: '120px', md: '160px' },
        },
        '.ReactPiano__Key--accidental': {
          backgroundColor: 'black',
          height: { xs: '80px', md: '100px' },
        },
        '.ReactPiano__Key--active': {
          backgroundColor: '#90caf9',
        },
        '.ReactPiano__Keyboard': {
          borderRadius: '4px',
          overflow: 'hidden',
        },
      }}
    >
      <SoundfontProvider
        instrumentName="acoustic_grand_piano"
        audioContext={audioContext}
        hostname={soundfontHostname}
        render={({ isLoading, playNote, stopNote }: { 
          isLoading: boolean; 
          playNote: (midiNumber: number) => void; 
          stopNote: (midiNumber: number) => void 
        }) => (
          <ReactPiano
            noteRange={noteRange}
            width={width}
            playNote={playNote}
            stopNote={stopNote}
            disabled={isLoading}
            keyboardShortcuts={keyboardShortcuts}
          />
        )}
      />
    </Box>
  );
};

export default Piano;