import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className="py-5 mb-5"> 
      <Row>
        <Col md={6}>
          <h1 className="mb-4">Data diri saya</h1>
          <p>
            Nama saya Affa Fahmi Zain sering di panggil Fahmi, lahir di Semarang, 04 Februari 2002.
          </p>
          <p>
            Platform ini dikembangkan oleh mahasiswa Universitas Dian Nuswantoro sebagai bagian dari proyek pengembangan perangkat lunak untuk membagi informasi data diri lebih banyak untuk Mahasiswa yang lain.
          </p>
          <h3 className="mt-5 mb-3">Tujuan informasi</h3>
          <p>
            Bertujuan memberikan informasi data diri alamat lengkap dan informasi data diri yang lain untuk membagi referensi sesama mahasiswa antar kampus dan antar jurusan.
          </p>
          <h3 className="mt-5 mb-3">Layanan Saya</h3>
          <ul>
            <li>Penyediaan informasi tentang data diri</li>
            <li>Apa saja biodata diri itu</li>
          </ul>
        </Col>
        <Col md={6}>
          <img src={`${process.env.PUBLIC_URL}/images/hai.jpg`} className="img-fluid" alt="About Us" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
