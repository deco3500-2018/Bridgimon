<template>
    <div class="food">

        <div class="page">
          <div class="page-details">
            <div class="page-food-name">
              {{ sample_data[id].name }}
            </div>
            <div class="page-food-desc">
              {{ sample_data[id].long_description }}
            </div>
          </div>
          <br>
          <div class="page-details">
            <div class="page-food-subname">
              History
            </div>
            <div class="page-food-desc">
              {{ sample_data[id].history }}
            </div>
          </div>
          <br>
          <div class="page-details">
            <div class="page-food-subname">
              Photos
            </div>
            <PhotoGallery  v-bind:id="id+4" ></PhotoGallery>
          </div>
          <br>
          <!-- <div class="page-details">
            <div class="page-food-subname">
              Best Places To Eat
            </div>
            <div class="page-food-places">
              <div class='card-places' v-for="(card,index) in sample_data[id]">
              </div>
            </div>
          </div> -->
        </div>
      </div>


</template>

<script>
import Vue from 'vue'
import VueSilentbox from 'vue-silentbox'
import PhotoGallery from '@/components/items/PhotoGallery'

Vue.use(VueSilentbox);

export default {
    name: "Attractions",
    props: ["id"],
    components: { PhotoGallery },
    data: () => ({
      sample_data: [
        {
          // sources: https://www.chinahighlights.com/travelguide/special-report/chinese-new-year/new-year-lion-dance.htm
          id:4,
          name: "Lion Dance",
          event: "Chinese New Year",
          history:`In traditional Chinese culture, the lion, like the Chinese dragon, was only an animal which existed in myth, and there were no actual lions in China. Before the Han Dynasty (202 BC–220 AD), only a few lions had reached the Central Plains from the western area of ancient China (now Xinjiang), due to Silk Road trade.

          At that time, people mimicked the appearance and actions of the newly arrived lions in a performance, which developed into the lion dance in the Three Kingdoms Period (220–280) and then became popular with the rise of Buddhism in the Northern and Southern Dynasties (420–589). In the Tang Dynasty (618–907), the lion dance was one of the court dances.

          After that lion dances continued to become a popular performance among the people, to pray for good luck during the Spring Festival or during other celebrations.

          The lion dance is an excellent example of Chinese folk culture, which has spread across the world with Chinese immigration. Overseas Chinese in Europe, America, etc. have established many lion dance clubs, performing on Chinese festivals or big occasions, particularly Chinese New Year.`,
          img_path: require("../../assets/sample_events/ChineseNewYear/liondance.jpg"),
          long_description:`The Lion Dance is a traditional Chinese dance performed on big occasions, such as the Spring Festival (Chinese New Year) for good luck, as it is believed that the lion is an auspicious animal.

          Performed in a lion costume, accompanied by the music of beating drums, clashing cymbals, and resounding gongs, lion dances imitate a lion's various movements or demonstrate martial arts agility, depending on the style.`

        },
        {
          // source: https://ztevetevans.wordpress.com/2015/10/18/the-origins-of-the-chinese-dragon-dance/
          id:5,
          name: "Dragon Dance",
          event: "Chinese New Year",
          history:`The Dragon Dance is generally believed to have originated in the time of the Han Dynasty (180-230 AD).  At the time, and still today, the Chinese people were very much an agrarian society depending for survival on their farming and agriculture for their daily needs.

          Performing the Dragon Dance was a means of appeasing the dragon so that rain would fall in the right amounts for a good harvest and there would not be too much hot weather which brings drought, hunger and disease.    During the Song dynasty it had become more of a folk dance that was performed during the major festivals.

          The dance is performed by a team of dancers who move in a flowing way in imitation of way the dragon causes a river to move.   The performers need to be very fit and move in a very coordinated way.  They need to time their movements perfectly as a mistake by one dancer can have a domino effect on the other dancers ruining the performance.`,
          img_path: require("../../assets/sample_events/ChineseNewYear/dragondance.jpg"),
          long_description:`The Chinese Dragon Dance is an extremely colorful and spectacular event that is traditionally performed at Chinese festivals around the word today.

          The Dragon Dance spectacularly expresses the vibrancy and energy associated with the dragon by the Chinese people.   This has become a popular celebration around the world where ever enclaves of Chinese people are found and is performed from the Spring Festival until the Lantern Festival and is the centre point of the Chinese New Year celebrations.

          The Dragon Dance is also known as the ‘Dance of dragon lantern’ or as ‘Playing dragon lantern’.  Traditional dragons are constructed from bamboo, cloth and grasses and other materials found locally.  The dragon dance is a much-loved folk dance performed during the Spring Festival and the Festival of Lanterns.`

        },
        {
          // sources: https://www.chinahighlights.com/travelguide/festivals/chinese-new-year-firecrackers.htm
          id:6,
          name: "Fireworks",
          event: "Chinese New Year",
          history:`Baozhu in Chinese, literally meaning "exploding bamboo", was the predecessor of firecrackers.

          In the Tang Dynasty (618–907), gunpowder was discovered by chance, which led to the invention of firecrackers in China. People found that a loud blast could be produced by inserting gunpowder into the hollow of a bamboo stick and then throwing it into a fire. The first firecrackers were born.

          In the Song Dynasty (960–1279), paper tubes came to replace the bamboo stalks.

          Wrapped in red, a lucky color for Chinese, firecrackers became increasingly popular to enhance celebrations and religious ceremonies. The red paper is left around (for at least a day) after letting off firecrackers, so as not to "sweep away good luck".`,
          img_path: require("../../assets/sample_events/ChineseNewYear/fireworks.jpg"),

          long_description:`It is an important custom to set off firecrackers and fireworks during the Chinese New Year period. Chinese New Year celebrations would not be complete without them.

          In traditional Chinese culture, firecrackers were originally used to scare away evil spirits. Today, lighting firecrackers and fireworks is a major custom to celebrate the coming of the New Year, and also a way to enhance the festive atmosphere.

          So, even though lighting firecrackers produces a loud noise nuisance and piles of red paper shreds, Chinese people not only take it in their stride, but also they generally enjoy firecrackers.`

        },
        {
          // sources: https://www.chinahighlights.com/travelguide/festivals/red-envelop.htm
          id:7,
          name: "Giving Red Envelopes",
          event: "Chinese New Year",
          history:`Chinese people love the color red, and regard red as the symbol of energy, happiness and good luck. Sending red envelopes is a way to send good wishes and luck (as well as money).

          Actually, the significance of red envelopes is the red paper, not the money inside. Wrapping money in red envelopes is expected to bestow more happiness and blessings on the receivers. Hence, it is impolite to open a red envelope in front of the person who gives it to you.

          In China, the red envelope is called yasui qian (压岁钱 /yaa-sway chyen/), which means 'suppressing ghosts money'. Those who receive a red envelope are wished another safe and peaceful year.`,
          img_path: require("../../assets/sample_events/ChineseNewYear/redenvelopes.jpg"),
          long_description:`Red envelopes always contain money in China, and are given, most commonly, to kids from their parents, grandparents, and others as Chinese New Year gifts.

          They are called hongbao in Mandarin and lai see in Cantonese. The term “red packets” has also come into common use, though hongbao look and function more like envelopes than packets.`
        }


      ]
  }),
  created() {
    var imagePath = this.sample_data[this.id].img_path;

    this.$emit("changeImagePath", imagePath)
  }
}
</script>


<style lang="scss" scoped>
.food {
  z-index: -1;
  
  .header-pic {
    img {
      width:100%;
      height:100%;
      object-fit: cover;
      overflow: hidden;
    }
  }
  .page {
    .page-details {
      .page-food-name {
        color:black;
        font-family: 'Playfair Display', serif;
        font-weight:bold;
        font-size:20px;
      }
      .page-food-subname {
        color:black;
        font-family: 'Playfair Display', serif;
        font-weight:bold;
        font-size:16px;

      }
      .page-food-desc {
        font-size: 10px;
        font-family: 'Open Sans', sans-serif;
        text-align: justify;
        white-space: pre-line;
      }
      .page-food-pics {
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        .card-food {
          display:inline-block;
          flex-direction: column;
          height:75px;
          width:75px;
          margin-right:10px;
          img {
            margin-right:5px;
            border-radius:5px;
            width:100%;
            height:100%;
            object-fit: cover;
            overflow: hidden;
          }
        }
      }
      .page-food-places {
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        .card-places {
          display:inline-block;
          flex-direction: column;
          border:1px solid black;
          border-radius: 5px;
          height:75px;
          width:150px;
          margin-right:10px;
        }
      }
    }
  }
  .info {
    .card {
      height:180px;
      border: 0px solid black;
      padding: 0px 20px;
      :hover {
        text-decoration: none!important;
      }
      .food-name {
        color:black;
        padding-left: 1px;
        font-family: 'Playfair Display', serif;
        font-weight:bold;
        font-size:20px;
        height:25%;
        border: 0px solid black;
      }
      .food-info {
        color:black;
        height:75%;
        display: flex;
        padding-top:10px;

        .food-pic {
          height: 105px;
          width:32%;
          border: 0px solid black;
          border-radius:7px;
          img {
            border-radius:7px;
            object-fit: cover;
            height: 100%;
            max-width: 100%;
          }
        }
        .food-description {
          margin-left:10px;
          font-family: 'Open Sans', sans-serif;
          font-size: 10px;
          width:70%;
          border: 0px solid black;


        }
      }
    }
}
}
</style>
