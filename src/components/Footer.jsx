import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__header">
          <div className="footer__picture">
            <img
              className="footer__picture-img"
              src="/images/about-me/hero-3.png"
              alt="emilya"
            />
          </div>
          <div className="footer__address">
            <h4 className="footer__title">Əlaqə</h4>
            <p className="footer__address-desc">
              <i class="fa-solid fa-house-chimney"></i> :
              <span>
                Xətai Rayonu, Ukrayna dairəsi, Nəsrəddin Tusi 56/71 (Amal mtk.)
              </span>
            </p>
            <p className="footer__address-mail">
              <i class="fa-solid fa-envelope"></i> :
              <a href="mailto: emilya.ismayilova.90@mail.ru">
                emilya.ismayilova.90@mail.ru
              </a>
            </p>
            <p className="footer__address-tel">
              <i class="fa-solid fa-phone"></i> :
              <a href="tel: +994 55 232 06 16">+994 55 232 06 16</a>
            </p>
          </div>
          <div className="footer__social">
            <h4 className="footer__title">Bizi İzəyin</h4>
            <ul className="footer__social-links">
              <li>
                <a
                  className="footer__social-link"
                  href="https://www.instagram.com/cakeschool/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-instagram"></i>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  className="footer__social-link"
                  href="https://www.facebook.com/cakeschoolemilya/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                  <span>facebook</span>
                </a>
              </li>
              <li>
                <a
                  className="footer__social-link"
                  href="https://www.tiktok.com/@cakeschool?_d=secCgYIASAHKAESPgo8sHzJFwBgzNavjyH8lxkzkuBzImlTj6sawnHujHnF759Do5uMaQaI9hGh885JLaq3DPtEOAb4ISKclM%2BeGgA%3D&_r=1&language=en&sec_uid=MS4wLjABAAAAC0qUBnavumSvY3I3g0yTRH71zTCM0-xtqBLsuo4_iipVNRxNb85BXCsQQ8vSO2n5&sec_user_id=MS4wLjABAAAAu3CDP7iaevi_0e9UgtKNg6nB01DGhq88Lg3J3WJZmN39KOAoZQ7n-9Knn-7jIm-x&share_app_id=1233&share_author_id=6975139385000952838&share_link_id=323f88f7-7bc0-40a0-9a0a-d44689041f9f&source=h5_m&timestamp=1654411080&u_code=diej55f4gie8bl&ugbiz_name=Account&user_id=6961071834365248517&utm_campaign=client_share&utm_medium=android&utm_source=copy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-tiktok"></i>
                  <span>tiktok</span>
                </a>
              </li>
              <li>
                <a
                  className="footer__social-link"
                  href="https://www.youtube.com/c/TokkiPro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-youtube"></i>
                  <span>youtube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copy">
        <div className="container">
          <div className="footer__copy-wrapper">
            <div className="footer__copy-author">
              Copyright &copy; 2022 - Powered by OE
            </div>
            <div className="footer__copy-with">
              <p>Made With ❤️ Baku, Azerbaijan</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
