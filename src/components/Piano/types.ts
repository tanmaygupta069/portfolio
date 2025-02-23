declare module 'react-piano' {
  export interface NoteRange {
    first: number;
    last: number;
  }

  export interface PianoProps {
    noteRange: NoteRange;
    width: number;
    playNote: (midiNumber: number) => void;
    stopNote: (midiNumber: number) => void;
    disabled?: boolean;
    keyboardShortcuts?: {key:string;midiNumber:number}[];
  }

  export const Piano: React.FC<PianoProps>;
  export const KeyboardShortcuts: {
    create: (config: { firstNote: number; lastNote: number; keyboardConfig: string[] }) => {key:string;midiNumber:number}[];
    HOME_ROW: string[];
  };
  export const MidiNumbers: {
    fromNote: (note: string) => number;
  };
}

declare module 'soundfont-player' {
  export interface SoundfontPlayer {
    play: (note: number) => { stop: () => void };
  }

  const Soundfont :{
    instrument: (
      context: AudioContext,
      name: string,
      options?: { hostname: string }
    ) => Promise<SoundfontPlayer>;
  }
  export default Soundfont;
}