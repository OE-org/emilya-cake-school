import React from "react";
import { HiLibrary } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { SiCakephp } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";
import { FaMapMarkerAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";

const CakeSchool = () => {
  return (
    <main className="cakeschool">
      <section className="cakeschool__hero">
        <h2 className="cakeschool__hero-title">Kurslarımız</h2>
      </section>
      <section className="cakeschool__courses container">
        <div className="cakeschool__courses-inner">
          <div className="cakeschool__course">
            <img
              className="cakeschool__course-img"
              src="/images/cake-school/school-42.jpg"
              alt="master chef"
            />
            <div className="cakeschool__course-info">
              <h4 className="cakeschool__course-title">Aşbazlıq</h4>
              <p className="cakeschool__course-desc">
                Peşəkar şefləri tərəfindən keçirilən aşbazlıq kursları
              </p>
            </div>
          </div>
          <div className="cakeschool__course">
            <img
              className="cakeschool__course-img"
              src="/images/cake-school/caramel-2.jpg"
              alt="master chef"
            />
            <div className="cakeschool__course-info">
              <h4 className="cakeschool__course-title">Qənnadçılıq</h4>
              <p className="cakeschool__course-desc">
                Müasir dünya standlarına uyğun qənnadçılıq kursları
              </p>
            </div>
          </div>
          <div className="cakeschool__course">
            <img
              className="cakeschool__course-img"
              src="/images/cake-school/caramel-3.jpg"
              alt="master chef"
            />
            <div className="cakeschool__course-info">
              <h4 className="cakeschool__course-title">Master Class</h4>
              <p className="cakeschool__course-desc">
                Tez tez yenilənən müasir mətbəx master class kursları
              </p>
            </div>
          </div>
        </div>
        <div className="cakeschool__courses-info">
          <FaQuoteLeft className="cakeschool__courses-icon--left" />
          <p>
            Cake School Emilya İsmayilova tərəfindən təsis edilmiş Azərbaycanın
            ilk Kulinariya məktəbidir. Məktəbimizdə irqindən, yaşından və
            cinsindən asılı olmayaraq hər kəs təhsil ala bilər. Aşpazlıq və
            Qənnadçılığın bütün sahələri üzrə dərslər və masterklaslar ölkənin
            ən peşəkar şefləri tərəfindən keçirilir. Kurslara həm peşəkarlar,
            həm də yeni başlayanlar qoşula bilər. Kursu bitirənlərə sertifikat
            və diplom verilir. Biz sizə bu sahədə öz karyeranızı qurmağa və iş
            tapmağa böyül dəstək oluruq.
          </p>
          <p className="cakeschool__courses-info--bold">
            Sizdə kursumuza yazılaraq yeni bacarıqlara sahiblənmək
            istəyirsinizsə elə indi bizimlə əlaqə qurun.
          </p>
          <p className="cakeschool__courses-info--bold">
            Master Class-lardan xəbərdar olmaq üçün instaqram kanalmıza abunə
            olub izləyin
          </p>
          <FaQuoteRight className="cakeschool__courses-icon--right" />
        </div>
      </section>
      <section className="cakeschool__advantages">
        <div className="cakeschool__advantages-header">
          <h3 className="cakeschool__advantages-title">Üstünlüklərimiz</h3>
        </div>
        <div className="cakeschool__advantages-items container">
          <div className="cakeschool__advantages-item">
            <HiLibrary />
            <h4 className="advantages__item-title">Peşəkar Şərait</h4>
            <p className="advantages__item-desc">
              İşıqlı və geniş məktəbimizdə tələbələrimiz üçün hər bir peşəkar
              şərait yaradılmışdır.
            </p>
          </div>
          <div className="cakeschool__advantages-item">
            <MdSchool />
            <h4 className="advantages__item-title">Müəllimlər</h4>
            <p className="advantages__item-desc">
              Dərslər tanınmış xarici və yerli aşbaz və qənnadşılıq ustaları -
              Şeflər tərəfindən keçirilir.
            </p>
          </div>
          <div className="cakeschool__advantages-item">
            <SiCakephp />
            <h4 className="advantages__item-title">Praktiki təcrübə</h4>
            <p className="advantages__item-desc">
              Bütün tələbələr müəllimlərlə birlikdə yerli və xarici mətbəx yemak
              və şirniyyatlarını hazirlayaraq real təcrübə qazanacaqlar.
            </p>
          </div>
          <div className="cakeschool__advantages-item">
            <TbCertificate />
            <h4 className="advantages__item-title">Sertifikat</h4>
            <p className="advantages__item-desc">
              Kursun uğurla bitirmiş tələbələrə sertifikat təqdim olunur.
            </p>
          </div>
          <div className="cakeschool__advantages-item">
            <FaMapMarkerAlt />
            <h4 className="advantages__item-title">Ünvan</h4>
            <p className="advantages__item-desc">
              Xətai Rayonu, Ukrayna dairəsi, Nəsrəddin Tusi 56/71 (Amal mtk).
            </p>
          </div>
          <div className="cakeschool__advantages-item">
            <GiForkKnifeSpoon />
            <h4 className="advantages__item-title">Müasir avadanlıq</h4>
            <p className="advantages__item-desc">
              Kulinariya məktəbimizin bütün müasir avadanlıqlarla təhciz
              olunmuşdur.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CakeSchool;
