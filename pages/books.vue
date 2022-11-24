<template>
  <div class="container">
    <b-card class="main">
      <b-row class="book2">
        <b-col class="col" cols="12" md="5">
          <a
            href="https://www.manning.com/books/tiny-node-projects?a_aid=wexler "
            target="_blank"
          >
            <img
              class="book-image"
              src="https://i.imgur.com/RKrHp78.jpg"
              alt=""
            />
          </a>
        </b-col>
        <b-col class="col" cols="12" md="7">
          <h1>Tiny Node Projects</h1>
          <section class="book-text">
            <p>
              In <i>Tiny Node Projects</i> you’ll exercise your Node.js skills
              by creating a collection of interesting projects. It introduces
              industry-standard tools and libraries for Node.js and puts them
              into practice as you create an email marketing service, an
              e-commerce store, a machine learning powered sentiment analyzer,
              and more. Every project is work-relevant, so employers will be
              excited to see them in your portfolio!
            </p>
          </section>
          <section class="highlights">
            <ul>
              <li>Publication in Spring 2023</li>
              <li>Hundreds of copies sold</li>
            </ul>
          </section>
          <section class="book-quotes">
            <div class="quote">
              <p>
                This book gives a great introduction into building small
                applications with Node. It's a great springboard and shows the
                versatility of working with JavaScript on the server.
              </p>
              <p class="name">-- Clive Herber, CTO, DistortedThinking</p>
            </div>
          </section>
          <ul class="links">
            <li>
              <a
                href="https://github.com/JonathanWexler/get-programming-with-nodejs"
                target="_blank"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'github']" />
                View code on Github
              </a>
            </li>
            <li>
              <a
                href="https://www.manning.com/books/tiny-node-projects?a_aid=wexler "
                target="_blank"
              >
                <font-awesome-icon size="2x" icon="book-open" />
                View at Manning Publications
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="book1">
        <b-col class="col" cols="12" md="5">
          <a
            href="https://www.manning.com/books/get-programming-with-node-js?a_aid=wexler "
            target="_blank"
          >
            <img
              class="book-image"
              src="https://i.imgur.com/QTsQDBe.png"
              alt=""
            />
          </a>
        </b-col>
        <b-col class="col" cols="12" md="7">
          <h1>Get Programming with Node.js</h1>
          <section class="book-text">
            <p>
              Get Programming with Node.js teaches you to build web servers
              using JavaScript and Node. In this engaging tutorial, you’ll work
              through eight complete projects, from writing the code for your
              first web server to adding live chat to a web app. Your hands will
              stay on the keyboard as you explore the most important aspects of
              the Node development process, including security, database
              management, authenticating user accounts, and deploying to
              production. You’ll especially appreciate the easy-to-follow
              discussions, illuminating diagrams, and carefully explained code!
            </p>
          </section>
          <section class="highlights">
            <ul>
              <li>Published in February 2019</li>
              <li>Over 5,000 copies sold</li>
              <li>Used in two accredited university courses</li>
              <li>Translated to Japanese and Korean</li>
            </ul>
          </section>
          <section class="book-quotes">
            <div class="quote">
              <p>
                Lays out a refreshingly down-to-earth, pragmatic, and clear path
                that shows you how to navigate your way through Node.js.
              </p>
              <p class="name">-- From the foreword by Kyle Simpson, Getify</p>
            </div>
            <div class="quote">
              <p>
                The book is worth putting on the shelf for anyone who wants to
                learn about Node.JS and Express
              </p>
              <p class="name">-- Nguyen Sy, Reader</p>
            </div>
            <div class="quote">
              <p>
                The go-to book to learn the intricacies of Node and become
                productive fast.
              </p>
              <p class="name">-- Vipul Gupta, Reader</p>
            </div>
          </section>
          <ul class="links">
            <li>
              <a
                href="https://www.amazon.com/Get-Programming-Node-js-Jonathan-Wexler/dp/1617294748"
                target="_blank"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'amazon']" />
                View on Amazon
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JonathanWexler/get-programming-with-nodejs"
                target="_blank"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'github']" />
                View code on Github
              </a>
            </li>
            <li>
              <a
                href="https://www.manning.com/books/get-programming-with-node-js?a_aid=wexler "
                target="_blank"
              >
                <font-awesome-icon size="2x" icon="book-open" />
                View at Manning Publications
              </a>
            </li>
            <li>
              <a
                href="https://www.oreilly.com/library/view/get-programming-with/9781617294747/"
                target="_blank"
              >
                <font-awesome-icon size="2x" icon="book-reader" />
                View at Safari Books
              </a>
            </li>
            <li>
              <a
                href="https://www.barnesandnoble.com/w/get-programming-with-nodejs-jonathan-wexler/1126999339"
                target="_blank"
              >
                <font-awesome-icon size="2x" icon="archway" />
                View at Barnes and Noble
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "SignikaNegative-Light";
  font-size: 16px;

  .book-text,
  .highlights {
    text-align: justify;
    padding: 0 40px;
    padding-top: 20px;
  }
  .book-quotes {
    padding: 40px;
    .quote {
      font-style: italic;
      text-align: left;
      padding-bottom: 20px;

      p {
        margin: 0;
      }

      .name {
        font-style: normal;
        text-align: right;
        font-size: 14px;
      }
    }
  }
  ul {
    padding: 0;
  }
  li {
    text-decoration: none;
    list-style-type: none;
    text-align: left;
    display: flex;
    padding-bottom: 10px;
    a {
      display: flex;
      align-items: center;

      svg {
        width: 80px;
      }
    }
  }

  .book-image {
    width: 100%;
  }
  .highlights {
    ul {
      li {
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        list-style: circle;
      }
    }
  }
}
</style>
