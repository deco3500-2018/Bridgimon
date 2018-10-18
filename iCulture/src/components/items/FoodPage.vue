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
            <div class="page-food-pics">
              <PhotoGallery v-bind:id="id" ></PhotoGallery>
            </div>
          </div>
          <br>
          <!-- <div class="page-details">
            <div class="page-food-subname">
              Best Places To Eat
            </div>
            <div class="page-food-places">
              <div class='card-places' v-for="(card,index) in sample_data[id]" :key="index">
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
    name: "FoodList",
    props: ["id"],
    components: { PhotoGallery },
    data: () => ({
      sample_data: [
        {
          // source: https://gbtimes.com/hello-china-60-dumplings
          id:0,
          name: "Dumplings",
          event: "Chinese New Year",
          history:`Dumplings have a history of more than 1,800 years. Originally, it was used to cure illness. It was reportedly invented by Zhang Zhongjing, one of the most famous practitioners of traditionalChinese medicine in ancient China.

          In a particular winter, it was extremely cold and febrile disease became an epidemic. Many poor people submitted to the cold weather and suffered frostbite in their ears.

          Zhang Zhongjing was upset and determined to fight against the disease. He mixed mutton meat, chili peppers and herbs together and then shredded them as fillings. He used dough to wrap these fillings into ear-shaped food.

          After boiling the food, he gave them to patients, each patient with two “ears” and one bowl of hot soup. Dozens of days past, the new food cured the patients’ frostbite and brought the epidemic under control.`,

          img_path: require("../../assets/sample_events/ChineseNewYear/dumplings.jpg"),
          short_description: "Dumplings or Jiao Zi traditionally resemble ingots or money, hence eating dumplings is believed to usher in wealth. This dish is widely popular in China, especially in North China. Dumplings generally consist of minced meat (pork, diced shrimp)...",
          long_description: "Dumplings or Jiao Zi traditionally resemble ingots or money, hence eating dumplings is believedto usher in wealth. This dish is widely popular in China, especially in North China. Dumplings generally consist of minced meat (pork, diced shrimp, fish, ground chicken, beef), vegetables, and wrapped in elastic dough skin.They can be cooked by boiling, steaming, frying or baking."

        },
        {
          // source: https://www.chinahighlights.com/travelguide/chinese-food/chinese-new-year-cake.htm
          id:1,
          name: "Glutinous Rice Cake",
          event: "Chinese New Year",
          history:`Niangao has a history of at least 1,000 years. Early in the Liao Dynasty (907–1125) people in Beijing had the custom of eating New Year cakes on the first day of the first month of the lunar year. During the Ming Dynasty (1368–1644) and the Qing Dynasty (1644–1911), Niangao had already become a common folk snack, and remains so today.

          Niangao has a legend about its supposed Suzhou origin, around 2,500 years ago.

          In the Spring and Autumn Period (722–481 BC) of ancient China, the whole country was divided into different small kingdoms and people suffered from the chaos of war. At that time, Suzhou was the capital of the Wu Kingdom. Strong walls were built to protect Wu from attacks, and the king held a banquet to celebrate their completion.

          All of the people ceased to worry about the war, except for the Prime Minister Wu Zixu (伍子胥). He told his entourages: "War should not be viewed lightly. The strong wall is a good protection indeed, but if the enemy state besieges our kingdom, the wall is also a hard barrier to ourselves. In case things really go badly, remember to dig a hole under the wall."

          Many years later, after Wu Zixu passed away, and his words came true. Many people starved to death during the seige. The soldiers did what Wu Zixu told them before and found that the wall under the earth was built with special bricks made from glutinous rice flour. This food saved many people from starvation. These bricks were the supposedly original niangao.

          After that, people made niangao every year to commemorate Wu Zixu. As time passed, niangao became what is now known as Chinese New Year cake.
          `,
          img_path: require("../../assets/sample_events/ChineseNewYear/ricecake.jpg"),
          short_description: "This glutinous rice-based cake (known as Kue Keranjang in Bahasa Indonesia) actually can be found year round, but is tradionally consumed during Chinese New Year for good luck. Nian Gao is homonym for 'higher year' which means that you'll be raising yourself in status in the coming year. Nian Gao is made of sticky...",
          long_description: `Niangao (年糕 /nyen-gaoww/ 'year cake') is a popular dessert eaten during Chinese New Year. It was originally used as an offering in ritual ceremonies before it gradually became a Spring Festival food. Niangao is usually made from glutinous rice flour, wheat starch, salt, water, and sugar. It is delicious when steamed, fried, or even eaten cold.`

        },
        {
          // sources: https://chinesenewyear.net/food/
          id:2,
          name: "Fish",
          event: "Chinese New Year",
          history:`Because the Chinese character for fish (yu 鱼) is pronounced the same as the Chinese character for surplus (yu 余), the fish symbol is frequently used to symbolize the wish for more in the sense of good luck, good fortune, long life, children, etc`,
          img_path: require("../../assets/sample_events/ChineseNewYear/fish.jpg"),
          short_description: ``,
          long_description: `Fish is a must for the Chinese New Year. Why does fish symbolize surplus and wealth? In Chinese, fish (鱼—yú) has the same pronunciation as 余, which means “surplus” or “extra.” The typical blessing is 年年有余 (Nián nián yǒuyú), wishing you to have a surplus (or fish) of food and money every year.

          Half of the fish is eaten for dinner, and the second half the next day. This is to prolong the surplus and make the future prosperous as well. A whole fish also represents a harmonious and whole family.

          Some would cook a bigheaded carp. But only the middle would be eaten, while the head and tail are left intact. The Chinese phrase is 有头有尾 (yǒu tóu yǒu wěi)—to have both a head and tail. This is a reminder to finish everything you start and wish for positive results. During dinner, the fish head should be placed facing the guests.

          In Hunan, red peppers are added after broiling the fish. Red is a festive and lucky color and the spicy hotness expresses wishes for fiery (thriving) business in the new year.`

        },
        {
          // sources: https://culinarybackstreets.com/cities-category/shanghai/2013/tangyuan/
          id:3,
          name: "Sweet Rice Ball",
          event: "Chinese New Year",
          history:`Legends about the origin of Lantern Festival abound – from mythical cranes descending from the heavens to vengeful gods with herds of fire-breathing dragons – but one story rings truest to our hungry ears, and it is conveniently the one that explains how tangyuan came to be part of the myth.

          During the Han Dynasty (206 B.C. – A.D. 220), a girl named Yuan Xiao was taken from her home when she was very young to serve the emperor by making the best tangyuan in the kingdom. She hadn’t seen her family during all her years of servitude, and her homesickness had driven her to thoughts of suicide when one of the emperor’s advisors, Dong Fangshuo, found her weeping next to a well, contemplating her final leap. The kind mandarin heard her story and swore he would find a way to reunite her with her family.

To make good on his promise, Dong Fangshuo took over the street stall of a soothsayer and began foretelling that the God of Fire would send an inferno to burn down the capital on the fifteenth day of the first lunar month. The citizens of the capital panicked, and soon the emperor heard tell of the coming catastrophe, so he sent for his trusted advisor: Dong Fangshuo. The faux fortune-teller told the emperor that if the city were to set off fireworks and hang red lanterns on the fifteenth day of the month, it would look aflame and thereby appease the God of Fire. He also mentioned that the god’s favorite snack was glutinous rice balls, and that an offering of Yuan Xiao’s tangyuan wouldn’t hurt, either. The emperor agreed and invited his kingdom to take part in the celebration. Yuan Xiao’s family came to the capital to join in the festivities, where they were reunited with their daughter. And they all lived happily ever after.`,
          img_path: require("../../assets/sample_events/ChineseNewYear/riceball.jpg"),
          short_description: ``,
          long_description: `Tangyuan – also known as yuánxiāo, after the holiday on which they are eaten – are often referred to in English as glutinous rice balls because their main ingredient is flour made from “glutinous” or “sticky” rice. Traditionally, the balls come stuffed with sweet black sesame paste, although the fillings can vary; the Shanghainese, for example, also like to put a savory spin on the dumplings by making a version with pork.`

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
