import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UsersStore from '../../stores/stores/users.store';

function ScoreTablePage() {
  const [usersScore, setUsersScore] = useState([]);

  useEffect(() => {
    const usersStatus = UsersStore.getState();

    setUsersScore(usersStatus.users);
  }, [usersScore]);

  return (
    <div className="d-flex p-5 justify-content-center align-items-center">
      <div className="w-25">
        <Table>
          <thead>
            <tr>
              <th>Jugador</th>
              <th>Aciertos</th>
              <th>Fallos</th>
            </tr>
          </thead>
          <tbody>
            {usersScore.map((userScore, index) => (
              <tr>
                <td>
                  @
                  {userScore.userId}
                </td>
                <td>{userScore.success}</td>
                <td>{userScore.fails}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ScoreTablePage;
