import { Component } from 'react';
import Soundfont from "soundfont-player";
import { SoundfontPlayer } from 'soundfont-player';
// import {Player} from "soundfont-player";

import './types';

type Props = {
  instrumentName: string;
  hostname: string;
  audioContext: AudioContext;
  render: (props: { isLoading: boolean; playNote: (midiNumber: number) => void; stopNote: (midiNumber: number) => void }) => React.ReactElement;
};

type State = {
  activeAudioNodes: { [key: number]: { stop: () => void } | null };
  instrument:  SoundfontPlayer | null;
};

class SoundfontProvider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeAudioNodes: {},
      instrument: null,
    };
  }

  componentDidMount() {
    this.loadInstrument(this.props.instrumentName);
  }

  loadInstrument = (instrumentName: string) => {
    Soundfont.instrument(this.props.audioContext, instrumentName, {
      hostname: this.props.hostname,
    }).then((instrument) => {
      this.setState({ instrument });
    });
  };

  playNote = (midiNumber: number) => {
    if (!this.state.instrument) return;
    const audioNode = this.state.instrument.play(midiNumber);
    this.setState({
      activeAudioNodes: {
        ...this.state.activeAudioNodes,
        [midiNumber]: audioNode,
      },
    });
  };

  stopNote = (midiNumber: number) => {
    if (!this.state.activeAudioNodes[midiNumber]) return;
    this.state.activeAudioNodes[midiNumber]?.stop();
    this.setState({
      activeAudioNodes: {
        ...this.state.activeAudioNodes,
        [midiNumber]: null,
      },
    });
  };

  render() {
    return this.props.render({
      isLoading: !this.state.instrument,
      playNote: this.playNote,
      stopNote: this.stopNote,
    });
  }
}

export default SoundfontProvider;