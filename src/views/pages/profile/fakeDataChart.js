import getChartColorsArray from "@/common/getChartColorsArray";
const mixedLineChart = {
    series: [{
        name: '',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
        name: ' ',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    chartOptions: {
        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: false,
            }
        },
        stroke: {
            width: [0, 4]
        },
        title: {
            text: ' ',
            style: {
                fontWeight: 600,
            },
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
            type: 'datetime'
        },
        yaxis: [{
            title: {
                text: ' ',
                style: {
                    fontWeight: 600,
                },
            },

        }, {
            opposite: true,
            title: {
                text: ' ',
                style: {
                    fontWeight: 600,
                },
            }
        }],
        colors: getChartColorsArray('["--vz-primary", "--vz-success"]'),
    }
};
export {mixedLineChart};