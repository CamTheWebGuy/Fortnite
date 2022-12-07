import React, { Fragment } from 'react';
import video from '../assets/bg.mp4';
import Header from '../components/Header';
import ForumPost from '../components/ForumPost';

export default function General() {
  const posts = [
    {
      postTitle: 'How do you like the new season?',
      poster: 'Aezera',
      postDate: 'December 6, 2022',
      lastCommentDate: 'Decemeber 6, 2022',
      lastCommentUser: 'Fyaree',
      lastCommentImg: 'https://randomuser.me/api/portraits/women/64.jpg',
      replies: '47',
      id: 1,
    },
    {
      postTitle: 'Is anyone else having FPS issues?',
      poster: 'Fyaree',
      postDate: 'December 4, 2022',
      lastCommentDate: 'December 6, 2022',
      lastCommentUser: 'Feliz',
      lastCommentImg: 'https://randomuser.me/api/portraits/women/40.jpg',
      replies: '12',
      id: 2,
    },
    {
      postTitle: 'What is your favorite skin from the battle pass this season?',
      poster: 'Nekothemimi',
      postDate: 'December 2, 2022',
      lastCommentDate: 'December 3, 2022',
      lastCommentUser: 'Dukc',
      lastCommentImg: 'https://randomuser.me/api/portraits/men/40.jpg',
      replies: '17',
      id: 3,
    },
  ];

  return (
    <Fragment>
      <Header />

      <video className='video-hero h-screen' autoPlay muted loop>
        <source src={video} type='video/mp4' />
      </video>

      <main className='pt-28 md:pt-48 lg:pt-10p'>
        <section className='px-5 md:px-10'>
          <h2 className='lucky-font text-white text-3xl pb-5'>General Forum</h2>
          <div className='forum-list'>
            {/* <ForumPost
              title='How do you like the new season?'
              content='Aezera - December 21, 2022'
              link='/forums/general'
            />

            <ForumPost
              title='Is anyone else having FPS issues?'
              content='Fyaree - December 1, 2022'
              link='/forums/general'
            /> */}

            {posts.map((post) => {
              return (
                <ForumPost
                  key={post.id}
                  title={post.postTitle}
                  content={`${post.poster} - ${post.postDate}`}
                  img={post.lastCommentImg}
                  lastCommenter={post.lastCommentUser}
                  lastCommentDate={post.lastCommentDate}
                  replies={post.replies}
                  link='/forums/general'
                />
              );
            })}
          </div>
        </section>
      </main>
    </Fragment>
  );
}
