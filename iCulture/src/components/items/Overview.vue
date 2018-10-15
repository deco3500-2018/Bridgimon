<template>
    <div class="overview">
      {{ sample_data[0].information }}
    </div>
</template>

<script>
export default {
    name: "Overview",
    data: () => ({
      sample_data: [
        {
          name: "Chinese New Year",
          information: `Chinese New Year celebrations, also known as the Spring Festival,
          in China start on the 23rd day of the 12th lunar month of the Chinese calendar.
          The festival lasts for about 23 days, ending on the 15th day of the first lunar
          month in the following year in the Chinese calendar. \n

          Many people clean their homes to welcome the Spring Festival. They put up the red
          posters with poetic verses on it to their doors, Chinese New Year pictures on their
          walls, and decorate their homes with red lanterns. It is also a time to reunite with
          relatives so many people visit their families at this time of the year. In the evening
          of the Spring Festival Eve, many people set off fireworks and firecrackers, hoping to cast
          away any bad luck and bring forth good luck. Children often receive “luck” money. Many
          people wear new clothes and send Chinese New Year greetings to each other. Various
          activities such as beating drums and striking gongs, as well as dragon and lion dances,
          are all part of the Spring Festival festivities. The Spring Festival is a national holiday in China. Government offices, schools, universities and many companies are closed during the period from the Spring Festival Eve to the seventh day of the first lunar month in the Chinese calendar. However, some enterprises such as banks often arrange for workers to be on shift duty. Public transport is available during the Chinese New Year period.`

        }
      ]
  })
}
</script>


<style lang="scss" scoped>
  .overview {
    font-family: 'Open Sans', sans-serif;

  }
</style>
