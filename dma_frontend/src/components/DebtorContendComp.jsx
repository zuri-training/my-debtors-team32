import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/contend-page.css';

const DebtorContendComp = () => {
  return (
    <div className=''>
      <div className=''>
        {/* TYPE YOUR CODE HERE */}
        <div className="compt">
          <h1 className="compt--text--1">Contend List</h1>
          <h1 className='compt--text--2'>List Of All Complaints</h1>
          <h2 className='compt--text--3'>See a list of all complaints made to your school, starting from the most recent</h2>
          <table className='compt--table'>
          <thead>
            <tr id='compt--white'>
              <th>Student Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          <tr className='bgc--green'>
              <td>Yinka Phillips</td>
              <td>25/07/2022</td>
              <td>View And Comment</td>
              <td><Link to ='' className='compt--link'>New</Link></td>
            </tr>
          <tr>
              <td>Paul Wilcox</td>
              <td>2/07/2022</td>
              <td>View And Comment</td>
              <td><Link to='' className='compt--link'>New</Link></td>
            </tr>
          <tr className='bgc--green'>
              <td>Hannah Young</td>
              <td>18/06/2022</td>
              <td>View And Comment</td>
              <td><Link to='' className='compt--link'>Read</Link></td>
            </tr>
          <tr>
              <td>Betty Amos</td>
              <td>09/5/2022</td>
              <td>View And Comment</td>
              <td><Link to='' className='compt--link'>Read</Link></td>
            </tr>
          <tr className='bgc--green'>
              <td>Terry Daniel</td>
              <td>15/04/2022</td>
              <td>View And Comment</td>
              <td><Link to='' className='compt--link'>Ignore</Link></td>
            </tr>
          <tr>
              <td>Sam Briggs</td>
              <td>1/04/2022</td>
              <td>View And Comment</td>
              <td><Link to='' className='compt--link'>Ignore</Link></td>
            </tr>
          <tr className='bgc--green'>
              <td>Elma Stan</td>
              <td>0/03/2022</td>
              <td>View And Comment</td>
              <td><Link to='' className='compt--link'>New</Link></td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DebtorContendComp;
