import React from 'react';
import Link from 'next/link';

export default function LinkButton({ large, text, dark }) {
    let styling = "btn";

    large ? styling += " btnLarge" : styling;
    dark ? styling += " btnDark" : styling;

  return (
      <Link href="/contact"><a className={styling}>{text}</a></Link>
  );
}
