<script>
import Layout from "@/layouts/main.vue";
import axios from "axios";
import config from "../../../../globalConfig";
import { format } from "date-fns";
import { mixedLineChart } from "./fakeDataChart";
export default {
  data() {
    return {
      mixedLineChart: mixedLineChart,
      user: JSON.parse(localStorage.getItem("user")),
      dataTrade: null,
      accTrade: null,
      dataHistory: null,
      historyLength: 0,
    };
  },
  components: {
    Layout,
  },
  created() {
    this.accTrade = this.$route.params.accountLogin;
    this.getAccountTrade();
    this.getHistory();
  },
  methods: {
    async getAccountTrade() {
      await axios
        .get(config.API_URL + "/getAccountTrade/" + this.accTrade)
        .then((res) => {
          this.dataTrade = res.data.account;
        })
        .catch((e) => console.log(e));
    },
    async getHistory() {
      await axios
        .get(config.API_URL + "/getHistory/" + this.accTrade)
        .then((res) => {
          this.dataHistory = res.data.history;
          this.historyLength = res.data.history.length;
        })
        .catch((e) => console.log(e));
    },
    formatDate(dateTimeString) {
      const formattedDate = format(new Date(dateTimeString), "MMM dd");
      return `(${formattedDate})`;
    },
  },
};
</script>
<template>
  <Layout>
    <BCard no-body>
      <BCardHeader>
        <BCardTitle class="mb-0">Trades</BCardTitle>
      </BCardHeader>
      <BCardBody>
        <div class="live-preview">
          <div class="table-responsive">
            <!-- Tables Border Colors -->
            <table
              class="table table-bordered table-nowrap"
              style="border-color: #dedede"
            >
              <tbody v-for="(item, index) in dataTrade" :key="index">
                <tr>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Trades:</span>
                      <span>{{ item.trades }}</span>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Longs Won:</span>
                      <span>{{ item.longWon }}%</span>
                      <!-- <span>(94/110)85%</span> -->
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Profit Factor:</span>
                      <span>{{ item.profitFactor }}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Profitability:</span>
                      <span>{{ item.Profitability }}</span>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Shorts Won:</span>
                      <span>{{ item.shortWon }}%</span>
                      <!-- <span>(94/110)85%</span> -->
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Standard Deviation:</span>
                      <span>${{ item.standardDeviation }}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Pips:</span>
                      <span>{{ item.pips }}</span>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Best Trade ($):</span>
                      <span
                        >{{ formatDate(item.updated_at) }}{{ item.bestTrade_Money }}</span
                      >
                      <!-- <span>(Feb 02)213.07</span> -->
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Sharpe Ratio:</span>
                      <span>{{ item.sharpeRatio }}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Average Win:</span>
                      <span
                        >{{ item.average_in_Pips }} pips/${{
                          item.averageWin_Money
                        }}</span
                      >
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Worst Trade($):</span>
                      <span
                        >{{ formatDate(item.updated_at)
                        }}{{ item.worstTrade_Money }}</span
                      >
                      <!-- <span>(Feb 02)-213.07</span> -->
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Z-Score (Probability):</span>
                      <span>{{ item.zScore }}</span>
                      <!-- <span>0.70 (53.4%)</span> -->
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Average Loss: </span>
                      <span
                        >{{ item.averageLoss_Pips }} pips/${{
                          item.averageLoss_Money
                        }}</span
                      >
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Best Trade (Pips): </span>
                      <span
                        >{{ formatDate(item.updated_at) }}{{ item.bestTrade_pips }}</span
                      >
                      <!-- <span>(Feb 02)213.07</span> -->
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Expectancy: </span>
                      <span
                        >{{ item.expectancyPips }} Pips/${{ item.expectancyMoney }}</span
                      >
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Lots:</span>
                      <span>{{ item.lots }}</span>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Worst Trade (Pips):</span>
                      <span
                        >{{ formatDate(item.updated_at) }}{{ item.worstTrade_pips }}</span
                      >
                      <!-- <span>(Feb 02)-213.07</span> -->
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>AHPR: </span>
                      <span>{{ item.AHPR }}%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Commissions:</span>
                      <span>{{ item.commissions }}</span>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>Avg. Trade Length:</span>
                      <span>{{ item.avgTradeLength }}s</span>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                      <span>GHPR: </span>
                      <span>{{ item.GHPR }}%</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </BCardBody>
    </BCard>
    <BRow>
      <BCol lg="12">
        <div>
          <b-card no-body>
            <b-tabs card>
              <b-tab title="Grown" active>
                <b-card-text>
                  <BCard no-body>
                    <BCardHeader
                      class="justify-content-between d-flex align-items-center"
                    >
                    </BCardHeader>
                    <BCardBody>
                      <apexchart
                        class="apex-charts"
                        height="350"
                        dir="ltr"
                        :series="mixedLineChart.series"
                        :options="mixedLineChart.chartOptions"
                      ></apexchart>
                    </BCardBody>
                  </BCard>
                </b-card-text>
              </b-tab>
              <b-tab title="Balance ">
                <b-card-text><BCard no-body>
                    <BCardHeader
                      class="justify-content-between d-flex align-items-center"
                    >
                    </BCardHeader>
                    <BCardBody>
                      <apexchart
                        class="apex-charts"
                        height="350"
                        dir="ltr"
                        :series="mixedLineChart.series"
                        :options="mixedLineChart.chartOptions"
                      ></apexchart>
                    </BCardBody>
                  </BCard></b-card-text>
              </b-tab>
              <b-tab title="Profit">
                <b-card-text><BCard no-body>
                    <BCardHeader
                      class="justify-content-between d-flex align-items-center"
                    >
                    </BCardHeader>
                    <BCardBody>
                      <apexchart
                        class="apex-charts"
                        height="350"
                        dir="ltr"
                        :series="mixedLineChart.series"
                        :options="mixedLineChart.chartOptions"
                      ></apexchart>
                    </BCardBody>
                  </BCard></b-card-text>
              </b-tab>
              <b-tab title="DrawnDown">
                <b-card-text><BCard no-body>
                    <BCardHeader
                      class="justify-content-between d-flex align-items-center"
                    >
                    </BCardHeader>
                    <BCardBody>
                      <apexchart
                        class="apex-charts"
                        height="350"
                        dir="ltr"
                        :series="mixedLineChart.series"
                        :options="mixedLineChart.chartOptions"
                      ></apexchart>
                    </BCardBody>
                  </BCard></b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </BCol>
    </BRow>
    <BCard no-body>
      <BCardHeader>
        <BCardTitle class="mb-0">Trading Activity ({{ historyLength }})</BCardTitle>
      </BCardHeader>
      <BCardBody>
        <div class="live-preview">
          <div class="table-responsive">
            <!-- Tables Border Colors -->
            <table class="table table-hover table-striped align-middle table-nowrap mb-0">
              <thead>
                <tr>
                  <th scope="col">Opem Date</th>
                  <th scope="col">Close Date</th>
                  <th scope="col">Symbol</th>
                  <th scope="col">Action</th>
                  <th scope="col">Lots</th>
                  <th scope="col">SL</th>
                  <th scope="col">TP</th>
                  <th scope="col">Open Price</th>
                  <th scope="col">Close Price</th>
                  <th scope="col">Pips</th>
                  <th scope="col">Profit</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Change</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="dataHistory && dataHistory.length > 0">
                  <tr v-for="(item, index) in dataHistory" :key="index">
                    <td>{{ item.openDate }}</td>
                    <td>{{ item.closeDate }}</td>
                    <td>{{ item.symbol }}</td>
                    <td>{{ item.actionType }}</td>
                    <td>{{ item.lots }}</td>
                    <td>{{ item.stopLoss }}</td>
                    <td>{{ item.takeProfit }}</td>
                    <td>{{ item.openPrice }}</td>
                    <td>{{ item.closePrice }}</td>
                    <td>{{ item.pips }}</td>
                    <td>{{ item.profit }}</td>
                    <td>{{ item.duration }}</td>
                    <td>{{ item.change }}%</td>
                  </tr>
                </template>
                <template v-else>
                  <tr>
                    <td colspan="13" class="text-center">
                      <i class="ri-information-fill"></i>Data not found
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </BCardBody>
    </BCard>
  </Layout>
</template>
