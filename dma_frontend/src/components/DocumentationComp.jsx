import React from 'react';
import '../styles/documentation.css';
import docimg from '../images/docimg.png';
const DocumentationComp = () => {
  return (
    <div className=''>
      <div className=''>
      <header>
      <div class="doc-heading">
        <h2
          >Debtor Monitoring Agency <br /><br />
          for Schools</h2
        >
      </div>
    </header>
    <main>
      <div class="doc-email">
        <p
          >[Debtor Monitoring Agency] <br />
          Design Desk </p
        ><br /><br />
        <p>dinmaeluchie@gmail.com</p><br /><br /><br />
        <p class="doc-blue">August 2022</p>
      </div>

      <div class="doc-prob">
        <div class="doc-prob1">
          <h3>Problem & Opportunities</h3><br /><br />
          <p
            >The problem of private schools owners incurring debt, resulting to
            poor planning of the academic year for students which leads to
            dwindling quality of education., with DMA, school owners can now
            admit only credit worthy wards which makes better planning.</p
          ><br />
          <p
            >The problem of incessant changing of schools for the wards by their
            parents/guardians just to evade payment of fees which in turn
            results to instability of the student having a sound foundation in
            education.</p
          ><br />
          <p
            >The problem of parents not fully aware of the responsibility of
            payment of fees, this leading to the fictitious practice of them
            switching their wards schools, with DMA, parents/guardians are also
            free to contend claims that they are debtors, with proof of
            submission documents.</p
          >
        </div>
        <div class="doc-prob2">
          <h3>Product & Design Decisions</h3> <br /><br /><br />
          <p
            >For this project, Figma was used to design both the low-fi and
            high-fi pages, for both the web and mobile versions, with
            aesthetically pleasing colours.</p
          >
        </div>
        <div class="doc-prob3">
          <h3> Research & Discovery </h3><br /><br />
          <p
            >A research was conducted on debt recovery, findings were that it
            fosters organizational development leading to financial goals. Debt
            recovery/monitoring is usually in the best interest of the
            organization’s growth. Incurement of debts often leads to deficit in
            growth and impedes advancement.</p
          ><br />
          <p>
            It is with this recovery that DMA pledges to solve the debt crisis
            in the educational sector, to enhance stability in schools to
            maintain educational quality, with a well structured outlay of
            debtors, schools are made to be aware of the debtors and also
            parents are free to contend claims of their debt status.
          </p>
        </div>
        <div class="doc-prob4">
          <h2>Designs</h2> <br />
          <img id="docimg" src={docimg} alt="doc-img" />
        </div>
        <div class="doc-prob5">
          <h3>Project Summary</h3>
          <p
            >A platform that allow schools within a given region to list a
            directory of wards of parents or guardians who owe, which would in
            turn prevent them from admitting wards who have outstanding debts in
            other schools. Device Frame by Koy Carraway For a Macbook or iPhone,
            open the layers</p
          >
        </div>
      </div>
    </main>
    <footer>
      <div class="foot-doc01">
        <p>How might we...</p><br /><br />
        <p
          >The key of this project is to checkmate wards who are owing in their
          previous school of attendance to clear off outstanding debts before
          changing schools.</p
        >
      </div>
      <div class="one-foot">
        <div class="foot-doc02">
          <h1>Table of Contents</h1> <br />
          <ol>
            <li>Landing Page</li>
            <li>Sign Up/Sign In</li>
            <li>Registration Page</li>
            <li>Admin Dashboard</li>
          </ol>
        </div>

        <div class="foot-doc03">
          <h4>What is the business impact?</h4><br />
          <p
            >DMA’s positive impact on the schools mode of operation can never be
            overemphasized, as it will be a major tool employed by school owners
            to checkmate guardians that are not credible to their wards.
            Therefore, there will be a massive reduction in debt crisis in the
            education sector for primary/secondary educational institutions.</p
          ><br />
          <p class="doc-red"
            >With DMA, Parents are also free to contend such claims with
            evidence by submitting supporting documents</p
          >
        </div>
      </div>
      <div class="foot-doc04">
        <div class="head-needs">
          <small>Research</small><br /><br />
          <h2>Core user needs</h2>
        </div>
        <div class="doc-flexneeds">
          <div class="needs1">
            <h4>Need</h4><br />
            <p
              >The need for school owners to avoid admitting wards that still
              has outstanding fees to pay in previous schools.</p
            >
          </div>
          <div class="needs2">
            <h4>Need</h4><br />
            <p
              >The need for parents/guardians to be credit worth, toward their
              wards.</p
            >
          </div>
          <div class="needs3">
            <h4>Need</h4><br />
            <p
              >The need for effective debtrecovery process in the educational
              sector to foster stability and active academic planning.</p
            >
          </div>
        </div>
      </div>
    </footer>
      </div>
    </div>
  );
};

export default DocumentationComp;
