import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

export default function CustomChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const options: ApexCharts.ApexOptions = {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        dataLabels: {
          enabled: false,
        },
        colors: ['#FF1654', '#247BA0'],
        series: [
          {
            name: 'Ano 1',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
          },
          {
            name: 'Ano 2',
            data: [20, 29, 37, 36, 44, 45, 50, 58],
          },
        ],
        stroke: {
          width: [4, 4],
        },
        plotOptions: {
          bar: {
            columnWidth: '20%',
          },
        },
        xaxis: {
          categories: ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','SET','OUT','NOV','DEZ'],
          labels: {
            style: {
              colors: '#000', // Cor dos labels do eixo X
            },
          },
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FF1654',
            },
            labels: {
              style: {
                colors: '#FF1654', // Cor dos labels do eixo Y para Series A
              },
            },
            title: {
              text: 'Series A',
              style: {
                color: '#FF1654', // Cor do título do eixo Y para Series A
              },
            },
          },
          {
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#247BA0',
            },
            labels: {
              style: {
                colors: '#247BA0', // Cor dos labels do eixo Y para Series B
              },
            },
            title: {
              text: 'Series B',
              style: {
                color: '#247BA0', // Cor do título do eixo Y para Series B
              },
            },
          },
        ],
        tooltip: {
          shared: false,
          intersect: true,
          x: {
            show: false,
          },
          style: {
            fontSize: '12px',
            fontFamily: undefined,
           
          },
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40,
        },
        
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      // Cleanup on unmount
      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
     <>
     <div>Comparativo anual</div>
     <div id="chart" ref={chartRef} className="chart-container">
 
 
     </div>
     
     </>
   
  )
}
