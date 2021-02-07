<template>
  <div>
    <!-- Template Campaign -->
    <v-container class="ma-0 pa-0" grid-list-sm>
      <div class="text-right">
        <v-btn small text to="/campaigns" class="blue--text">
          All Campaign <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>

      <v-layout wrap>
        <v-flex v-for="item in campaigns" :key="`campaign-` + item.id" xs6>
          <!-- Pindah ke Campaign Item
            <v-card :to="'/campaign/' + item.id">
            <v-img :src="item.image" class="white--text">
              <v-card-title
                class="fill-height align-end"
                v-text="item.title"
              ></v-card-title>
            </v-img>
          </v-card> -->
          <campaign-item :campaign="item"></campaign-item>
        </v-flex>
      </v-layout>
    </v-container>
    <!--END Template Campaign -->

    <!-- Template Blogs -->
    <v-container class="ma-0 pa-0" grid-list-sm>
      <div class="text-right">
        <v-btn small text to="/blogs" class="blue--text">
          All Blogs <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>

      <v-layout wrap>
        <v-carousel hide-delimiters height="250px">
          <v-carousel-item v-for="blog in blogs" :key="`blog-` + blog.id">
            <v-img :src="blog.image" class="fill-hegiht">
              <v-container fill-height fluid pa-0 ma-0>
                <v-layout fill-height align-end>
                  <v-flex xs12 mx-2>
                    <span
                      class="headline white--text"
                      v-text="blog.title"
                    ></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-layout>
    </v-container>
    <!-- Template Blogs -->
  </div>
</template>

<script>
export default {
  data: () => ({
    campaigns: [],
    blogs: [],
  }),
  components: {
    CampaignItem: () => import("../components/CampaignItem"),
  },
  created() {
    axios
      .get("api/campaign/random/2")
      .then((response) => {
        // console.log(response.data);
        let { data } = response.data;
        this.campaigns = data.campaigns;
      })
      .catch((error) => {
        let { response } = error;
        console.log(response);
      });

    axios
      .get("api/blog/random/2")
      .then((response) => {
        // console.log(response.data);
        let { data } = response.data;
        this.blogs = data.blogs;
      })
      .catch((error) => {
        let { response } = error;
        console.log(response);
      });
  },
};
</script>
