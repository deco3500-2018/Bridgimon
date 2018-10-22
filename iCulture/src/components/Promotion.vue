<template>
    <div class="promotion">
        <div class="main-content">
          <div class="row">
            <div class="section col-sm-12">
              <div class="test">
                <div class="title">
                  <img class="logo-icon" src="../assets/home/logo.png">
                  <img class="logo-title" src="../assets/other/DECO3500-logo.png">
                </div>
                <div class="subtitle">
                  <p>Connecting Across Distances Through Cultural Awareness</p>
                </div>
                <div class="description">
                  <p>iCulture is a mobile application designed to build connections between those willing to share their culture and those who wish to learn. The application is a tool for navigating the different cultures of the world and learning about them through the culturally signficant events. By breaking down the event into its various aspects such as what food is being eaten, we can better help the user to develop knowledge that covers a broader range.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="links row">

          <div class="poster col-sm-4">
            <div class="poster-info">
              <p>Check Out Our Promotional Poster!</p>
            </div>
            <div class="poster-pic">
              <a href="https://github.com/deco3500-2018/Bridgimon/blob/master/iCulture/src/assets/other/DECO3500-poster.jpg">
                <img src="../assets/other/DECO3500-poster.jpg">
              </a>
            </div>
          </div>

          <div class="prototype col-sm-4">
            <div class="prototype-info">
              <p>Try Out Our Prototype!</p>
            </div>
            <div class="prototype-pic">
              <router-link :to="{ name: 'Home', params: {} }">
                <img src="../assets/other/DECO3500-prototype.png">
              </router-link>
            </div>
          </div>


        </div>

        <div class="footer-title">
          <div class="title">
            <p>Meet our team</p>
          </div>
          <div class="info">
            <p>We are Bridgimon. We are a team of 4 diverse individuals who were passionate about finding a way to overcome cultural barriers that a person might face. We used this opportunity to research just all about cultural barriers and what might be done to tear them down.</p>
            <!-- <p>We are Bridgimon. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
          </div>
        </div>

        <div class="footer row">

            <div class="all-member">
              <div class="member">
                <img src="../assets/Profile/taiki.jpg">
                <p>Taiki</p>
              </div>
              <div class="member">
                <img src="../assets/Profile/ovan.jpg">
                <p>Ovan</p>
              </div>
              <div class="member">
                <img  src="../assets/Profile/ahmad.jpg">
                <p>Ahmad</p>
              </div>
              <div class="member">
                <img src="../assets/Profile/nipun.jpg">
                <p>Nipun</p>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Promotion"
}
</script>

<style lang="scss" scoped>
.promotion {

    overflow-x: hidden;
    height:100vh;
    width:100vw;
    .main-content {
      padding-top:20px;
      display:flex;
      justify-content: center;
      .row {
        height:100%;
        width:100%;
        width:100%;
        .section {
          .test {
            width:100%;
            height:320px;
            // border:1px solid black;
            .title{

              // border:1px solid black;
              justify-content: center;
              display:flex;
              margin-top: 20px;
              font-size: 72px;
              font-family: 'Pacifico', cursive;
              .logo-title {
                width: 40%;
                height: 40%;
              }
              .logo-icon {
                width: 10%;
                height: 10%;
              }
            }
            .subtitle {
              // border:1px solid black;
              padding: 0px 15px;
              font-size: 22px;
              font-family: 'Ubuntu', serif;
            }
            .description {

              // border:1px solid black;
              text-align: justify;
              font-family: 'Ubuntu', serif;
              font-size: 16px;
              padding: 40px 170px;
              padding-top:0px
            }

          }
          text-align: center;
        }
      }
    }
    .footer-title {
      text-align: center;
      .title {
        font-size:26px;
      }
      .info {
        text-align: justify;
        padding: 0px 170px;
      }
    }
    .footer {
      height:200px;
      // border:1px solid black;
      display: flex;
      justify-content: center;
      .all-member{
        display: flex;
        justify-content: center;
        width:60%;
        .member {
          text-align: center;
          width:25%;
          img {
          height:75%;
          border-radius: 100px;
          }
        }
      }
      padding-bottom:30px;
    }
    .links {

      font-family: 'Ubuntu', serif;
      font-size:18px;
      height:400px;
      // border:1px solid black;
      display: flex;
      justify-content: center;
      .poster {
        text-align: center;
        // border:1px solid black;
        height:100%;
        .poster-pic {
          // border:1px solid black;
          height:80%;
          img {
            max-height: 100%;
          }
          img:hover {
            max-height: 102%;
          }
        }
      }
      .prototype {
        text-align: center;
        // border:1px solid black;
        height:100%;
        .prototype-pic {
          // border:1px solid black;
          height:80%;
          img {
            max-height: 100%;
          }
          img:hover {
            max-height: 102%;
          }
        }
      }
    }
    @media only screen and (max-width: 600px) {
    .description {
        padding: 0px 10px !important;
    }
    .test{
      height:400px !important;
    }
    .footer-title {
      margin-top:400px;
    }
    .all-member {
      width:90% !important;
    }
    .member {
      img {
        max-height:50% ;
      }
    }
    .info {
      padding: 0px 30px !important;
    }
  }
}
</style>
