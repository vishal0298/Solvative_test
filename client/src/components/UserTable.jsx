import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/users/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data)
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
    <div>
    <h1>Create New User</h1>
        <Link to={"/new"}><button>Create New user</button></Link>
    </div>
    <div className="table-container">
      <h2>Peer Five Users</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>P5 Balance</th>
            <th>Reward Balance</th>
            <th>Login</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.peerFivePoints}</td>
              <td>{row.rewardPoints}</td>
              <td>
              <button>Login</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default UserTable
