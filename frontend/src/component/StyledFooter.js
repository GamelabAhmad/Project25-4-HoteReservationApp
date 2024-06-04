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
    justify-content: space-between;
`;

export const FooterSection = styled.div`
    padding: 10px;
`;

export const FooterSection1 = styled(FooterSection)`
    flex: 1;
    width: 70%;
    margin-left: 10%;
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
    flex: 1;
    width: 30%;
    h3 {
        font-size: 30px;
        font-family: inter;
    }
    p {
        font-size: 20px;
    }
`;

export const FooterSection3 = styled(FooterSection)`
    flex: 1;
    width: 30%;
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