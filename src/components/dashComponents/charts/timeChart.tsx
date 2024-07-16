import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

interface Chamado {
  abertura: string;
  conclusao: string;
}

const TimeChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dados simulados (data e hora de abertura e tempo de conclusão em minutos)
    const chamados: Chamado[] = [
      { abertura: '2024-07-10T09:00:00', conclusao: '2024-07-10T09:35:00' },
      { abertura: '2024-07-10T10:15:00', conclusao: '2024-07-10T10:50:00' },
      { abertura: '2024-07-10T11:30:00', conclusao: '2024-07-10T12:05:00' },
      { abertura: '2024-07-10T13:00:00', conclusao: '2024-07-10T13:30:00' },
      { abertura: '2024-07-10T14:45:00', conclusao: '2024-07-10T15:10:00' },
    ];



// Converter dados para o formato adequado para ApexCharts
const seriesData: number[] = chamados.map(chamado => {
  const abertura = new Date(chamado.abertura).getTime();
  const conclusao = new Date(chamado.conclusao).getTime();
  const tempoDecorrido = (conclusao - abertura) / (1000 * 60 * 60); // Converter para horas
  
  return parseFloat(tempoDecorrido.toFixed(2)); // Arredondar para 2 casas decimais
});

    // Labels (opcional, pode ser usado para mostrar a data/hora de abertura)
    const labels: string[] = chamados.map(chamado => {
      const abertura = new Date(chamado.abertura);
      return abertura.toLocaleString('pt-BR');
    });

    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'bar',
        height: 350,
        fontFamily: 'Satoshi, sans-serif',
      },
      series: [{
        name: 'Tempo Decorrido (horas)',
        data: seriesData,
      }],
      xaxis: {
        categories: labels,
        title: {
          text: 'Tempo (horas)',
        },
        labels: {
          formatter: function(value: any) {
            if (typeof value === 'number') {
              return value.toFixed(2); // Arredonda para duas casas decimais se for número
            }
            return value;
          },
        },
      },
      yaxis: {
        title: {
          text: 'Chamados',
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#FF4560'], // Cor vermelha
      tooltip: {
        theme: 'dark', // Usar tema escuro para tooltips
        
        style: {
          fontSize:'12px',
          fontFamily: undefined,
        // Cor do texto da tooltip
        },
        x: {
          formatter: function(val: any) {
            if (typeof val === 'number') {
              return `${arredondar(val)} horas`; // Formata para duas casas decimais se for número

            }
            return val;
          },
        }, 
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
            
          },
        },
      }],
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div className="chart-container">
      <div className='text-black dark:text-white'>Tempo de solução de chamados</div>
      <div ref={chartRef}></div>
    </div>
  );
};


function arredondar(valor:Number){
  console.log(valor)
  return valor.toFixed(2)

}

export default TimeChart;
