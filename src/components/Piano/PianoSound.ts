// Simple synth for piano sounds
export class PianoSound {
  private audioContext: AudioContext;
  private oscillators: Record<string, OscillatorNode> = {};
  private gainNodes: Record<string, GainNode> = {};

  constructor() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }

  playNote(frequency: number, duration = 0.5) {
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    
    gainNode.gain.value = 0.3;
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    const now = this.audioContext.currentTime;
    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
    
    oscillator.start(now);
    oscillator.stop(now + duration);
    
    return oscillator;
  }
  
  getFrequencyForNote(note: string): number {
    const notes: Record<string, number> = {
      'C4': 261.63,
      'C#4': 277.18,
      'D4': 293.66,
      'D#4': 311.13,
      'E4': 329.63,
      'F4': 349.23,
      'F#4': 369.99,
      'G4': 392.00,
      'G#4': 415.30,
      'A4': 440.00,
      'A#4': 466.16,
      'B4': 493.88,
      'C5': 523.25,
    };
    
    return notes[note] || 440;
  }
}