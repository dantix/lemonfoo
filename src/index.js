import h from 'lemonjsx';
import { spawn } from 'child_process';

const lemonbar = spawn('/usr/bin/lemonbar', ['-b', '-f "Ubuntu-12"']);

const bar = (
  <bar>
    <section align="l">Hello</section>
    <section align="r">world</section>
  </bar>
);

lemonbar.stdin.write(bar);
