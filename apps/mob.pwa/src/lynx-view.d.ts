declare namespace JSX {
  interface IntrinsicElements {
    'lynx-view': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      url?: string;
    };
  }
}