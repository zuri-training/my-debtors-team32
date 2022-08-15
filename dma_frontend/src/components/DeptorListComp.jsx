import React from 'react';
import '../styles/DebtorList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsSearch } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';
// import { useMount, useCookie } from 'react-use';

const DeptorListComp = () => {
  // let navigate = useNavigate();

  return (
    <div className='debtor dashboardInfo'>
      <div className='debtorhead'>
        <h2>List of debtors in Schools</h2>
      </div>
      <div className='search-box'>
        <div className='inputsearch'>
          <input
            type='text'
            id='input-search'
            className='input-search'
            placeholder='Search Debtor'
          />
          <BsSearch /> <br />
        </div>
      </div>
      <div className='mytable'>
        <table className='deji-table'>
          <thead>
            <tr id='debt'>
              <th>Name of student</th>
              <th>Name of school</th>
              <th>Payment status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='list-1'>
              <td>Ifeanyichukwu Hanifat </td>
              <td>Corona secondary school</td>
              <td>Abandoned payment</td>
            </tr>
            <tr>
              <td>Chimamanda Afunku</td>
              <td>Chrisland Intl’ school</td>
              <td>Pending payment</td>
            </tr>
            <tr>
              <td>Efe Israel </td>
              <td>Greensprings school</td>
              <td>Abandoned payment</td>
            </tr>
            <tr>
              <td>Fatima Chidinma</td>
              <td>Children Intl’ school</td>
              <td>Pending payment</td>
            </tr>
            <tr>
              <td>Ikhidie Obianuju</td>
              <td>Grange school</td>
              <td>Abandoned payment</td>
            </tr>
            <tr>
              <td>Buchi Nwachukwu</td>
              <td>Meadow Hall</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Bukola Ajekaiye</td>
              <td>British secondary school</td>
              <td>Pending payment</td>
            </tr>
            <tr>
              <td>Remilekun Adesina</td>
              <td>American Intl’ school</td>
              <td>Abandoned payment</td>
            </tr>
            <tr>
              <td>Omolara Okonkwo</td>
              <td>Rainbow college</td>
              <td>Abandoned payment</td>
            </tr>
            <tr>
              <td>Isioma Oluwatosin</td>
              <td>Lagoon school</td>
              <td>Abandoned payment</td>
            </tr>
            <tr>
              <td>Chizoba Agboola</td>
              <td>Lekki british school</td>
              <td>Abandoned payment</td>
            </tr>
            <tr>
              <td>Ifunanya Clare </td>
              <td>Atlantic hall </td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Titi Oladimeji</td>
              <td>New hall intl’ school</td>
              <td>Abandoned payment</td>
            </tr>
            <tr>
              <td>Zainab Adebayo</td>
              <td>Vivian Fowler</td>
              <td>Abandoned payment </td>
            </tr>
            <tr>
              <td>Chimamanda Afunku</td>
              <td>Chrisland Intl’ school</td>
              <td>Pending payment</td>
            </tr>
            <tr>
              <td>Efe Israel </td>
              <td>Greensprings school</td>
              <td>Abandoned payment</td>
            </tr>
            <tr>
              <td>Fatimah Chidinma</td>
              <td>Children Intl’ school</td>
              <td>Pending payment</td>
            </tr>
            <tr>
              <td>Ikhidie Obianuju</td>
              <td>Grange school</td>
              <td>Abandoned payment</td>
            </tr>
            <tr>
              <td>Buchi Nwachukwu</td>
              <td>Meadow Hall</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeptorListComp;
