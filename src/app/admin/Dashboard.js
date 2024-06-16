import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Dashboard = () => {
  const [dashboard, setDashboard] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    handleGetDashboard();
  },[]);

  const handleGetDashboard = async () => {
    // try{
    //   const token = localStorage.getItem("token");
    //   const data = await axiosInstance.get('/admin/dashboard',{
    //     headers:{
    //       Authorization:`Bearer ${token}`
    //     }
    //   });
    //   setDashboard(data.data)
    // }
    // catch(err){
    //   console.log(err)
    //   toast.error(err?.response?.data?.msg);
    // }
  }


  let date = 31;
  let labels = Array(date)
    .fill(1)
    .map((_, index) => index + 1);
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Thống kê",
      },
    },
  };

  let data = {
    labels,
    datasets: [
      {
        label: "Tài khoản mới",
        data: dashboard?.countsAccount || [5,4,1],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Tiểu thương mới",
        data:dashboard?.countsGame || [10,20,30],
        backgroundColor: "rgba(53, 162, 235, 1)",
      },
      {
        label: "Order mới",
        data:dashboard?.countsBuyedGame || [3,6,10],
        backgroundColor: "rgba(20, 120, 235, 1)",
      },
    ],
  };

  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-6 col-xl-4">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-line fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Tổng tài khoản</p>
                <h6 className="mb-0">20</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-bar fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Tổng số tiểu thương</p>
                <h6 className="mb-0">10</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-area fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Tổng số orders</p>
                <h6 className="mb-0">50</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
};

export default Dashboard;
