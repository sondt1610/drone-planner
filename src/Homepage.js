/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

export function HomePage() {
  return (
    <>
      {/* <p className="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please{" "}
        <a href="http://browsehappy.com/">upgrade your browser</a> to improve
        your experience. 
      </p> */}
      <div className="wrapper" id="wrapper">
        <header className="header-site" id="header" data-aos="fade-down">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">
                <span className="logo">
                  <img src="assets/img/logo.svg" alt="Logo" />
                </span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="icon-bar"></i>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav align-items-lg-center ms-lg-auto mb-2 mb-lg-0">
                  <li className="nav-item company">
                    <a className="nav-link" aria-current="page" href="#">
                      企業
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      ユーザーマニュアル
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      お問い合わせ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      ログイン
                    </a>
                  </li>
                  <li className="nav-item nav-item-register">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="form-1.html"
                    >
                      会員登録
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="main-content" id="main">
          <section className="banner">
            <div className="banner-item">
              <div className="banner-item-bg">
                <video src="assets/img/video.mp4" loop muted autoPlay />
              </div>
              <div
                className="banner-item-body position-relative"
                data-aos="fade-up"
              >
                <div className="banner-item-content">
                  <div className="container position-relative">
                    <div className="row">
                      <div className="col-lg-6">
                        <h1 className="banner-item-title">
                          ドローン飛行計画の
                          <br />
                          作成時間を大幅に短縮
                        </h1>
                        <div className="banner-item-text">
                          ピンポイントの気象予報を元に
                          <br />
                          飛行計画提案を行う、ドローン専用に開発した
                          <br />
                          「オールインワン飛行計画作成サービス」です。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner-item-info">
                  <div className="container">
                    <div className="banner-item-img">
                      <img
                        className="img-fluid d-none d-md-block"
                        src="assets/img/uploads/img-banner.svg"
                        alt=""
                      />
                      <img
                        className="img-fluid d-md-none"
                        src="assets/img/uploads/img-banner-mb.svg"
                        alt=""
                      />
                    </div>
                    <a
                      className="btn btn-custom btn-warning-dark"
                      href="form-2.html"
                    >
                      2ヶ月無料トライアル実施中！{" "}
                      <i className="ico-long-arrow-right-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="scroll-down" data-aos="fade-up">
                <span className="scroll-down-text"></span>
              </div>
            </div>
          </section>

          {/* <section className="section-videos section">
            <div className="container">
              <div className="section-heading bolder" data-aos="fade-up">
                <h4 className="sub-title-heading">Drone Flight Planner</h4>
                <h2 className="section-title">活用事例</h2>
              </div>
              <div className="videos" data-aos="fade-up">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card card-grid">
                      <div className="card-img">
                        <a
                          href="https://www.youtube.com/watch?v=7d8M1SViqZI"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="card-img-top"
                            src="assets/img/uploads/video-demo.png"
                            alt="..."
                          />
                          <i className="ico-video-play"></i>
                        </a>
                      </div>
                      <div className="card-body p-0">
                        <h3 className="card-title">
                          <a
                            href="https://www.youtube.com/watch?v=7d8M1SViqZI"
                            target="_blank"
                            rel="noreferrer"
                          >
                            空撮・イベント編
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card card-grid">
                      <div className="card-img">
                        <a
                          href="https://www.youtube.com/watch?v=qM6WiMDNlWU"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="card-img-top"
                            src="assets/img/uploads/video-demo.png"
                            alt="..."
                          />
                          <i className="ico-video-play"></i>
                        </a>
                      </div>
                      <div className="card-body p-0">
                        <h3 className="card-title">
                          <a
                            href="https://www.youtube.com/watch?v=qM6WiMDNlWU"
                            target="_blank"
                            rel="noreferrer"
                          >
                            インフラ点検・スクール編
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card card-grid">
                      <div className="card-img">
                        <a
                          href="https://www.youtube.com/watch?v=EBz8YNBNmrg"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="card-img-top"
                            src="assets/img/uploads/video-demo.png"
                            alt="..."
                          />
                          <i className="ico-video-play"></i>
                        </a>
                      </div>
                      <div className="card-body p-0">
                        <h3 className="card-title">
                          <a
                            href="https://www.youtube.com/watch?v=EBz8YNBNmrg"
                            target="_blank"
                            rel="noreferrer"
                          >
                            農薬散布編
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section
            className="section-campaign section text-white"
            data-aos="fade-up"
          >
            <div className="container">
              <div className="section-heading text-center">
                <h2 className="section-title">
                  2ヶ月（60日間）
                  <br />
                  無料キャンペーン実施中！
                </h2>
                <div className="description">
                  Drone Flight Plannerを
                  <br />
                  初めてご利用されるお客様は、
                  <br />
                  3ライセンスを2ヶ月間無料でお試しいただけますお持ちのライセンスには、Drone
                  Flight Plannerの利用者を自由に設定できます
                </div>
              </div>
              <div className="group-button text-center">
                <a
                  className="btn btn-custom rounded-0 btn-md btn-outline-light btn-icon-outer-right"
                  href="form-2.html"
                >
                  お試しはこちら<i className="ico-arrow-right"></i>
                </a>
              </div>
            </div>
          </section>

          <section className="section-feature section">
            <div className="container">
              <div
                className="section-heading text-md-center"
                data-aos="fade-up"
              >
                <h4 className="sub-title-heading">FEATURE</h4>
                <h2 className="section-title">
                  ドローン飛行に
                  <br />
                  必要な機能がオールインワン
                </h2>
                <div className="description d-none d-lg-block">
                  ドローン飛行に必要な機能が集約されているので、もう複数のサービスやアプリを見比べて情報収集する
                  <br />
                  必要はありません。全てこのサービス１つで完結します。
                </div>
              </div>
              <div className="feature-product" data-aos="fade-up">
                <div className="row">
                  <div className="col-lg-4 order-lg-2 col-img-product">
                    <div className="product-img text-center">
                      <img src="assets/img/uploads/drone.png" alt="" />
                      <div className="description d-lg-none px-0">
                        ドローン飛行に必要な機能が集約されているので、もう複数のサービスやアプリを見比べて情報収集する
                        <br />
                        必要はありません。全てこのサービス１つで完結します。
                      </div>
                      <div className="d-none d-lg-block">
                        <div className="feature-product-item-icon child-1">
                          <img
                            src="assets/img/uploads/feature-product-1.svg"
                            alt=""
                          />
                        </div>
                        <div className="feature-product-item-icon child-2">
                          <img
                            src="assets/img/uploads/feature-product-2.svg"
                            alt=""
                          />
                        </div>
                        <div className="feature-product-item-icon child-3">
                          <img
                            src="assets/img/uploads/feature-product-3.svg"
                            alt=""
                          />
                        </div>
                        <div className="feature-product-item-icon child-4">
                          <img
                            src="assets/img/uploads/feature-product-4.svg"
                            alt=""
                          />
                        </div>
                        <div className="feature-product-item-icon child-5">
                          <img
                            src="assets/img/uploads/feature-product-5.svg"
                            alt=""
                          />
                        </div>
                        <div className="feature-product-item-icon child-6">
                          <img
                            src="assets/img/uploads/feature-product-6.svg"
                            alt=""
                          />
                        </div>
                        <div className="feature-product-item-icon child-7">
                          <img
                            src="assets/img/uploads/feature-product-7.svg"
                            alt=""
                          />
                        </div>
                        <div className="feature-product-item-icon child-8">
                          <img
                            src="assets/img/uploads/feature-product-8.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 order-lg-last col-wrap col-text-right">
                    <div className="feature-product-item">
                      <div className="feature-product-item-icon">
                        <img
                          src="assets/img/uploads/feature-product-1.svg"
                          alt=""
                        />
                      </div>
                      <div className="feature-product-item-text">
                        <h3 className="feature-product-item-title">降雨予報</h3>
                        <div className="feature-product-item-expert">
                          飛行飛行ポイントに雨雲が近づいた場合には降雨予報をメールで通知。
                        </div>
                      </div>
                    </div>
                    <div className="feature-product-item">
                      <div className="feature-product-item-icon">
                        <img
                          src="assets/img/uploads/feature-product-2.svg"
                          alt=""
                        />
                      </div>
                      <div className="feature-product-item-text">
                        <h3 className="feature-product-item-title">
                          日の出・日の入
                        </h3>
                        <div className="feature-product-item-expert">
                          飛行日の日の出/日の入り時間と方向を表示。日中の順光（太陽）方向を確認することが可能。
                        </div>
                      </div>
                    </div>
                    <div className="feature-product-item">
                      <div className="feature-product-item-icon">
                        <img
                          src="assets/img/uploads/feature-product-3.svg"
                          alt=""
                        />
                      </div>
                      <div className="feature-product-item-text">
                        <h3 className="feature-product-item-title">
                          チーム内情報共有
                        </h3>
                        <div className="feature-product-item-expert">
                          飛行計画ごとにコメントを記入することが可能。グループメンバー間で情報共有可能。
                        </div>
                      </div>
                    </div>
                    <div className="feature-product-item">
                      <div className="feature-product-item-icon">
                        <img
                          src="assets/img/uploads/feature-product-4.svg"
                          alt=""
                        />
                      </div>
                      <div className="feature-product-item-text">
                        <h3 className="feature-product-item-title">
                          飛行の記録
                        </h3>
                        <div className="feature-product-item-expert">
                          飛行開始・終了時刻の記録や飛行計画、気象予報を記録。過去の飛行計画を再利用できる。
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-wrap text-lg-end col-text-left">
                    <div className="feature-product-item">
                      <div className="feature-product-item-icon">
                        <img
                          src="assets/img/uploads/feature-product-5.svg"
                          alt=""
                        />
                      </div>
                      <div className="feature-product-item-text">
                        <h3 className="feature-product-item-title">
                          飛行計画の自動生成
                        </h3>
                        <div className="feature-product-item-expert">
                          飛行ポイントはランダム入力でOK。飛行目的に沿った上限風速も設定可能。
                        </div>
                      </div>
                    </div>
                    <div className="feature-product-item">
                      <div className="feature-product-item-icon">
                        <img
                          src="assets/img/uploads/feature-product-6.svg"
                          alt=""
                        />
                      </div>
                      <div className="feature-product-item-text">
                        <h3 className="feature-product-item-title">
                          飛行計画の提案
                        </h3>
                        <div className="feature-product-item-expert">
                          入力した飛行ポイントの気象予報、各飛行ポイント間の移動距離を基に2つの飛行計画を提案。
                        </div>
                      </div>
                    </div>
                    <div className="feature-product-item">
                      <div className="feature-product-item-icon">
                        <img
                          src="assets/img/uploads/feature-product-7.svg"
                          alt=""
                        />
                      </div>
                      <div className="feature-product-item-text">
                        <h3 className="feature-product-item-title">
                          飛行適合順表示
                        </h3>
                        <div className="feature-product-item-expert">
                          飛行の目的に合わせて「天気の良い順」「風の弱い順」に飛行ポイントを並べ替え可能。
                        </div>
                      </div>
                    </div>
                    <div className="feature-product-item">
                      <div className="feature-product-item-icon">
                        <img
                          src="assets/img/uploads/feature-product-8.svg"
                          alt=""
                        />
                      </div>
                      <div className="feature-product-item-text">
                        <h3 className="feature-product-item-title">
                          上空の風向・風速予報
                        </h3>
                        <div className="feature-product-item-expert">
                          設定した
                          高度の風向・風速は72時間後まで3時間ごとに更新。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features">
                <div className="card card-horizontal">
                  <div className="row align-items-center">
                    <div className="col-md-6" data-aos="fade-left">
                      <div className="card-img">
                        <img
                          className="img-fluid"
                          src="assets/img/uploads/feature-1.svg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-right">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#">
                            気象予報と移動距離に基づいて
                            <br />
                            飛行計画を自動生成
                          </a>
                        </h3>
                        <div className="card-text">
                          1kmメッシュの高精細な気象予報と飛行ポイント（もしくはイベント）に応じて、移動距離優先または、気象予報優先の飛行計画を自動で生成し提示します。気象予報が変化したときにも、それに応じた飛行計画を再度自動で生成するので、何度でも飛行計画を選択し簡単に変更・設定することができます
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-horizontal">
                  <div className="row align-items-center">
                    <div className="col-md-6" data-aos="fade-left">
                      <div className="card-img">
                        <img
                          className="img-fluid"
                          src="assets/img/uploads/feature-2.svg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-right">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#">高度10mごとの風向・風速予報</a>
                        </h3>
                        <div className="card-text">
                          点検・農薬散布・測量・空撮など、飛行目的に応じた風速上限が設定でき、風速を基に飛行計画が作成できます。また現場でも10mごと高度300mまで風向・風速が確認できるので、ドローンの性能に合った飛行や危険回避ができ、安心・安全です。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-horizontal">
                  <div className="row align-items-center">
                    <div className="col-md-6" data-aos="fade-left">
                      <div className="card-img">
                        <img
                          className="img-fluid"
                          src="assets/img/uploads/feature-3.svg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-right">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#">現場でのメンバー間情報共有</a>
                        </h3>
                        <div className="card-text">
                          飛行計画ごとにコメントを書き込めるので、飛行開始時間の変更や現場に行かないと分からない情報をメンバー間で共有することができます。もう必要なやりとりは、SNSやメールなど他アプリを使う必要はありません。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-horizontal">
                  <div className="row align-items-center">
                    <div className="col-md-6" data-aos="fade-left">
                      <div className="card-img">
                        <img
                          className="img-fluid"
                          src="assets/img/uploads/feature-4.svg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-right">
                      <div className="card-body">
                        <h3 className="card-title">
                          <a href="#">過去の飛行計画の再利用</a>
                        </h3>
                        <div className="card-text">
                          何度も同じ運航をする場合には、過去の飛行プランを選択し、再利用することができます。さらに、類似した飛行計画を作成したい場合にも、飛行ポイントを初めから検索・登録する手間が必要ありません。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-benefits bg-grey section">
            <div className="container">
              <div
                className="section-heading text-left text-md-center"
                data-aos="fade-up"
              >
                <h4 className="sub-title-heading">BENEFITS</h4>
                <h2 className="section-title">圧倒的な時短を実現！</h2>
                <div className="sub-heading d-none d-md-block">
                  トータルの所要時間をおよそ 1/8 に削減（※当社調べ）
                </div>
              </div>
              <div className="benefits" data-aos="fade-up">
                <div className="benefit-expert text-center">
                  <div className="timer">
                    <span className="old">&nbsp;約100min&nbsp;</span>
                    <span className="long-arrow">→</span>
                    <span className="new">約15min</span>
                  </div>
                  <div className="sub-heading d-md-none">
                    トータルの所要時間をおよそ 1/8 に削減（※当社調べ）
                  </div>
                </div>
                <div className="benefits-detail">
                  <div className="row g-0">
                    <div className="col-lg-4">
                      <div className="block-time">
                        <div className="block-time-top text-center">
                          飛行1週間前
                        </div>
                        <div className="block-time-body d-flex d-lg-block">
                          <div className="block-time-before">
                            <h3 className="block-time-title text-center text-lg-start">
                              <span className="label">飛行計画の作成</span>
                              <span className="dots d-none d-lg-inline">
                                ・・・
                              </span>
                              <span className="time d-block d-lg-inline">
                                60min
                              </span>
                            </h3>
                            <div className="desc">
                              <div className="desc-wrap">
                                飛行ポイントを地図アプリで検索し、その地点の気候をアプリA、風向/風速をアプリB、降雨予報をアプリC・・・と、複数のアプリを横断しながら、飛行の順番（飛行計画）を決める必要があります。
                              </div>
                            </div>
                            <div className="block-lable d-none d-lg-flex">
                              現状
                            </div>
                          </div>
                          <div className="block-time-after">
                            <h3 className="block-time-title text-center text-lg-start">
                              <span className="label">飛行ポイントの入力</span>
                              <span className="dots d-none d-lg-inline">
                                ・・・
                              </span>
                              <span className="time d-block d-lg-inline">
                                8min
                              </span>
                            </h3>
                            <div className="desc">
                              <div className="desc-wrap">
                                地図上で飛行ポイントを登録するだけで、気象予報を自動で収集し、瞬時に飛行計画案を生成・提示します。飛行ポイントごとの風向・風速・天気・雲量などの気象情報も一目で確認可能です。
                              </div>
                            </div>
                            <div className="block-lable d-none d-lg-flex">
                              これから
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="block-time">
                        <div className="block-time-top text-center">
                          飛行2～3日前
                        </div>
                        <div className="block-time-body d-flex d-lg-block">
                          <div className="block-time-before">
                            <h3 className="block-time-title text-center text-lg-start">
                              <span className="label">飛行計画の更新</span>
                              <span className="dots d-none d-lg-inline">
                                ・・・
                              </span>
                              <span className="time d-block d-lg-inline">
                                15min
                              </span>
                            </h3>
                            <div className="desc">
                              <div className="desc-wrap">
                                飛行2~3日前には、再度地図アプリや気象予報アプリで飛行ポイントごとの気象予報を確認し、気象予報が変わっている場合には、せっかく立てた飛行計画も見直しが必要となり、時間を取られることになります。
                              </div>
                            </div>
                          </div>
                          <div className="block-time-after">
                            <h3 className="block-time-title text-center text-lg-start">
                              <span className="label">飛行計画の自動生成</span>
                              <span className="dots d-none d-lg-inline">
                                ・・・
                              </span>
                              <span className="time d-block d-lg-inline">
                                2min
                              </span>
                            </h3>
                            <div className="desc">
                              <div className="desc-wrap">
                                飛行当日の気象予報に変更があった場合でも、その都度最適な飛行計画を自動で生成し再提案します。毎日のように見ていた気象予報アプリも開く必要がありません。
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="block-time">
                        <div className="block-time-top text-center">
                          飛行前日
                        </div>
                        <div className="block-time-body d-flex d-lg-block">
                          <div className="block-time-before">
                            <h3 className="block-time-title text-center text-lg-start">
                              <span className="label">最終飛行計画の決定</span>
                              <span className="dots d-none d-lg-inline">
                                ・・・
                              </span>
                              <span className="time d-block d-lg-inline">
                                30min
                              </span>
                            </h3>
                            <div className="desc">
                              <div className="desc-wrap">
                                前日に気象予報が急変していた場合には、飛行時間を変更する、飛行順序を入れ替えるなどの対応が発生し、想定以上の手間や時間を要してしまいます。
                              </div>
                            </div>
                          </div>
                          <div className="block-time-after">
                            <h3 className="block-time-title text-center text-lg-start">
                              <span className="label">最終飛行計画の決定</span>
                              <span className="dots d-none d-lg-inline">
                                ・・・
                              </span>
                              <span className="time d-block d-lg-inline">
                                3min
                              </span>
                            </h3>
                            <div className="desc">
                              <div className="desc-wrap">
                                飛行前日に気象予報が急変した場合でも、飛行計画を再提案します。前日の飛行計画変更や調整でバタバタすることもなく、飛行準備に専念できます。
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-price section" data-aos="fade-up">
            <div className="container">
              <div className="section-heading">
                <h4 className="sub-title-heading">PRICE</h4>
                <h2 className="section-title">￥66,000/年(税込)</h2>
                <div className="sub-heading">
                  ※お支払いは年額一括払いとなりますのでご了承ください
                </div>
              </div>
            </div>
          </section>

          <section className="section-campaign text-white" data-aos="fade-up">
            <div className="container">
              <div className="section-heading text-center">
                <h2 className="section-title">
                  2ヶ月（60日間）
                  <br />
                  無料キャンペーン実施中！
                </h2>
                <div className="description">
                  Drone Flight Plannerを
                  <br />
                  初めてご利用されるお客様は、
                  <br />
                  3ライセンスを2ヶ月間無料でお試しいただけますお持ちのライセンスには、Drone
                  Flight Plannerの利用者を自由に設定できます
                </div>
              </div>
              <div className="group-button text-center">
                <a
                  className="btn btn-custom rounded-0 btn-md btn-outline-light btn-icon-outer-right"
                  href="form-2.html"
                >
                  お試しはこちら<i className="ico-arrow-right"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
        <footer
          className="footer-site text-center"
          id="footer"
          data-aos="fade-up"
        >
          <div className="container">
            <ul className="nav-footer list-unstyled">
              <li>
                <a href="#">利用規約</a>
              </li>
              <li>
                <a href="#">Cookieポリシー</a>
              </li>
              <li>
                <a href="#">プライバシーポリシー</a>
              </li>
              <li>
                <a href="#">日清紡ホールディングスについて</a>
              </li>
              <li>
                <a href="#">お問合せ</a>
              </li>
            </ul>
            <div className="copyright">
              © Nisshinbo Holdings Inc. All Rights Reserved.{" "}
            </div>
          </div>
          <button className="go-top">
            <i className="ico-back-to-top"></i>
            <span>Top</span>
          </button>
        </footer>
      </div>

      <div
        className="modal fade modal-custom-small"
        id="changeAccountModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-change-account">
                <h3 className="form-change-account-label">
                  お名前(漢字)を変更
                </h3>
                <form action="">
                  <div className="form-group">
                    <label className="form-label">お名前（漢字）</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="山田太郎"
                    />
                  </div>
                  <div className="d-flex justify-content-between justify-content-md-end">
                    <button className="btn btn-custom btn-sm btn-outline-lighter-dark">
                      キャンセル
                    </button>
                    <button className="btn btn-custom btn-sm btn-warning-dark">
                      更新
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
