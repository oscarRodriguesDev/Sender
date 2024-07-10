'use client'

import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

export default function CIDs() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const options = {
        chart: {
          type: 'bar',
          height: '400px', // Altura do gráfico
          width: '100%'    // Largura do gráfico
        },
        series: [{
          name: 'sales',
          data: [30, 40, 35, 50, 25, 15] // cids por mês
        }],
        xaxis: {
          categories: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'] // meses vai vir do banco quando virar o ano resolver se apaga ou armazena o valor para anual
        },
        tooltip: {
          theme: 'dark', // Usar tema escuro para tooltips
          style: {
            fontSize: '12px',
            fontFamily: undefined,
            colors: ['#000'] // Cor do texto da tooltip
          },
          x: {
            show: true,
            formatter: undefined,
            title: {
              formatter: (seriesName:any) => seriesName,
              style: {
                color: '#000' // Cor do título da tooltip
              }
            },
          },
          y: {
            formatter: (val:any) => val,
            title: {
              formatter: () => '',
              style: {
                color: '#000' // Cor do valor da tooltip
              }
            },
          },
          marker: {
            show: false
          },
          fixed: {
            enabled: false,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0
          }
        }
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
    <div className='-z-40'>
      <div className='text-black dark:text-white'>Atestados por Mes</div>
      <div id="chart" ref={chartRef}></div>
    </div>
  );
}
