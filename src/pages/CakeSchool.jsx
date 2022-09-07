import React from "react";
import { HiLibrary } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { SiCakephp } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";

const CakeSchool = () => {
  return (
    <main className="cakeschool">
      <section className="cakeschool__hero">
        <h2 className="cakeschool__hero-title">Kurslarımız</h2>
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
