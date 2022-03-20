import { useState } from 'react';
import useAnim from './hooks/useAnim';
import './App.scss';

const yellow = 'd3da0a';
const green = '0a5d45';

let color;

function setColor(dark) {
  dark ? (color = yellow) : (color = green);
}

function App() {
  const [dark, setDark] = useState(false);
  setColor(dark);
  const tracks = [
    {
      id: 0,
      title: 'كيف',
      src:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1154931265%3Fsecret_token%3Ds-h3fWI6YUwT1&color=%23' +
        color +
        '&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    },
    {
      id: 1,
      title: 'جيب فلوس',
      src:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1168895971%3Fsecret_token%3Ds-NmEvc7gj8bX&color=%23' +
        color +
        '&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    },
    {
      id: 2,
      title: 'مهموم',
      src:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1235848534%3Fsecret_token%3Ds-bvVz1Is8g34&color=%23' +
        color +
        '&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      feat: ['Fury', 'https://fury.broccolirecords.com/'],
    },
    {
      id: 3,
      title: 'الساحب',
      src:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1178176015%3Fsecret_token%3Ds-C49KTcqdqZL&color=%23' +
        color +
        '&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      feat: ['DBL Z', 'https://dblz.art/'],
    },
  ];
  const [track, setTrack] = useState(tracks[0]);
  useAnim('slide');
  useAnim('fade');

  return (
    <div className={'App fade ' + (dark ? 'dark' : '')}>
      <div className='home'>
        <h1>M4</h1>
        <div className='art' onClick={() => setDark(!dark)}>
          <div className='pointer'>
            <img alt='' />
          </div>
          <img className='cover' alt='' />
        </div>
        <h3>رشاش EP</h3>
      </div>
      <div className='tracks'>
        <div className='list'>
          <ul>
            {tracks.map((item) => (
              <li
                key={item.id}
                className={track.title === item.title ? 'selected slide' : 'slide'}
                onClick={() =>
                  setTrack({
                    title: item.title,
                    src: item.src,
                  })
                }
              >
                {item.title}
                {item.feat ? (
                  <>
                    {' '}
                    (Feat.{' '}
                    <a href={item.feat[1]} target='_blank' rel='noreferrer'>
                      {item.feat[0]}
                    </a>
                    )
                  </>
                ) : (
                  ''
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className='player fade'>
          <iframe
            title='player'
            width='100%'
            height='300'
            scrolling='no'
            frameBorder='none'
            allow='autoplay'
            src={track.src}
          ></iframe>
        </div>
      </div>
      <div className='links fade'>
        <a
          href='https://www.instagram.com/muhanna_4/'
          target='_blank'
          rel='noreferrer'
        >
          M4
        </a>
        <a
          href='https://www.broccolirecords.com/'
          target='_blank'
          rel='noreferrer'
        >
          Broccoli Records
        </a>
      </div>
    </div>
  );
}

export default App;
