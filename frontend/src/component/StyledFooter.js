// StyledFooter.js
import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
`;

export const BagianFooter = styled.footer`
    background-color: #333;
    color: white;
    padding: 20px;
    display: flex;
    flex-wrap: wrap; /* Memungkinkan bagian untuk memenuhi baris baru ketika tidak cukup ruang */
    justify-content: space-between;
`;

export const FooterSection = styled.div`
    margin-left: 10%;
    padding: 10px;
    flex: 1;
    width: 100%; /* Setiap bagian akan mengambil 100% lebar saat layar kecil */
`;

export const FooterSection1 = styled(FooterSection)`
    h1 {
        color: orange;
        font-size: 45px;
        font-family: inter;
    }
    p {
        font-size: 20px;
    }
`;

export const FooterSection2 = styled(FooterSection)`
    h3 {
        font-size: 30px;
        font-family: inter;
    }
    p {
        font-size: 20px;
    }
`;

export const FooterSection3 = styled(FooterSection)`
    h3 {
        font-size: 30px;
        font-family: inter;
    }
    p {
        font-size: 20px;
    }
`;

export const WhatsAppIcon = styled.i`
    /* CSS untuk ikon WhatsApp */
    font-size: 24px;
    color: green;
    margin-right: 5px; /* Memberi sedikit jarak antara ikon dan teks */
`;

