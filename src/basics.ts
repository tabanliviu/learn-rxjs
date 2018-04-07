import { Subject } from 'rxjs/Subject';

// operators
import { catchError, map, takeWhile } from 'rxjs/operators';

// observable creation
import { interval } from 'rxjs/observable/interval';
import { of } from 'rxjs/observable/of';

const ticker = interval(1000)
  .pipe(
    map((i) => {
      console.log(`interval fired ${i}`);
      if (i === 2) {
        throw Error();
      }
      return i;
    }),
    catchError((error) => of(2)),
    takeWhile((i, index) => index < 10),
    map((i) => i * 10)
  );
const subject = new Subject();

ticker.subscribe(subject);

const s1 = subject.subscribe(log);
const s2 = subject.subscribe((value: number) => log(value * 10));
const s3 = subject.subscribe((value: number) => log(value * 100));

const terminate = ticker.subscribe((i) => i > 40 && terminate.unsubscribe());

[s2, s3].forEach(terminate.add.bind(terminate));

function log(...args) {
  console.log(...args);
}
