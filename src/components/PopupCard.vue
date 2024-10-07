<template>
  <!-- Popup Layer -->
  <div :class="['popup-overlay', { show: isOpen }]" @click="closePopup">
    <div :class="['popup-content', { show: isOpen }]" @click="closePopup">
      <div class="popup-header">
        <div class="popup-title">
          <i class="material-icons">lightbulb</i>
          <h2 v-if="typeFlag === '1'">#1 프론트엔드 개발</h2>
          <h2 v-else-if="typeFlag === '2'">#2 서비스 운영 및 유지보수</h2>
          <h2 v-else-if="typeFlag === '3'">#3 프로젝트 관리 및 협업</h2>
          <h2 v-else-if="typeFlag === '4'">#4 세부 담당 업무</h2>
          <h2 v-else>EBS Oline Class 운영팀</h2>
        </div>
        <span class="popup-close" @click="closePopup"
          ><i class="material-icons">close</i></span
        >
      </div>
      <div class="popup-body">
        <a href="https://www.ebsoc.co.kr/" target="_blank">
          <div class="popup-image">
            <img
              src="../assets/img/aboutMe/ebs_oc_logo.png"
              class="img_ebs"
              alt="EBS 온라인클래스 로고"
            />
          </div>
        </a>
        <div class="popup-labels">
          <h3>Labels</h3>
          <div v-if="typeFlag === '1'" class="labels-container">
            <span class="label label-green">Vue.js</span>
            <span class="label label-teal">Nuxt</span>
            <span class="label label-blue">UX/UI</span>
          </div>
          <div v-else-if="typeFlag === '2'" class="labels-container">
            <span class="label label-darkblue">성능 최적화</span>
            <span class="label label-pink">협업</span>
            <span class="label label-yellow">커뮤니케이션</span>
          </div>
          <div v-else-if="typeFlag === '3'" class="labels-container">
            <span class="label label-darkorange">GitLab</span>
            <span class="label label-lightblue">SourceTree</span>
            <span class="label label-sky">Trello</span>
          </div>
          <div v-else-if="typeFlag === '4'" class="labels-container">
            <span class="label label-orange">보안 인식</span>
            <span class="label label-darkgreen">시간 관리</span>
            <span class="label label-red">코딩 스킬</span>
          </div>
          <div v-else class="labels-container">
            <span class="label label-green">Vue.js</span>
            <span class="label label-teal">Nuxt</span>
            <span class="label label-red">Npm</span>
            <span class="label label-darkgreen">Node.js</span>
            <span class="label label-yellow">JavaScript</span>
            <span class="label label-orange">HTML</span>
            <span class="label label-pink">SCSS</span>
            <span class="label label-darkblue">CSS</span>
            <span class="label label-darkorange">GitLab</span>
            <span class="label label-lightblue">SourceTree</span>
            <span class="label label-light-sky">Visual Studio</span>
          </div>
        </div>
        <div class="popup-description mt25">
          <div class="popup-sub-title">
            <i class="material-icons description-icon">description</i>
            <h3>Description</h3>
          </div>
          <ul v-if="typeFlag === '1'" class="bull_list">
            <li>
              Nuxt 기반의 Vue.js 프레임워크를 사용하여 EBS 온라인 클래스의
              전반적인 프론트엔드 업무를 담당하였습니다.
            </li>
            <li>
              사용자 경험(UX) 및 사용자 인터페이스(UI) 최적화를 위해 최신 웹
              기술을 활용한 인터페이스 설계 및 구현
            </li>
            <li>
              반응현 웹 디자인을 적용하여 다양한 디바이스 환경에서도 최적의 학습
              경험을 제공
            </li>
            <li>웹 접근성 향상을 위한 표준 준수 및 최적화 작업 진행</li>
          </ul>
          <ul v-else-if="typeFlag === '2'" class="bull_list">
            <li>
              서비스 안정성 및 성능 개선을 위한 지속적인 모니터링 및 버그 수정
            </li>
            <li>사용자 피드백을 반영하여 기능 개선 및 신규기능 추가</li>
            <li>
              백엔드 개발팀 및 디자이너와 협업하여 통합적이고 일관성 있는 서비스
              제공
            </li>
          </ul>
          <ul v-else-if="typeFlag === '3'" class="bull_list">
            <li>GitLab를 사용하여 소스 코드 버전 관리 및 협업</li>
            <li>SourceTree를 활용한 효율적인 형상 관리</li>
            <li>
              Trello를 활용하여 작업 항목을 체계적으로 관리하고 개발 진척 상황을
              공유
            </li>
            <li>
              다양한 부서와의 협업을 통해 통합적인 서비스 제공 및 문제 해결
            </li>
          </ul>
          <ul v-else-if="typeFlag === '4'" class="bull_list">
            <li>
              ISMS-P 소스코드 진단 조치 수행<br />(초기 조치 후 진단조치 건수:
              0건)
            </li>
            <li>TTA 사용자 편의성 점검 실시</li>
            <li>클래스 기본 정보 관리 UI 개선</li>
            <li>메인 페이지 경량화</li>
            <li>온라인 클래스 라이브 / 화상수업 초대 링크 공유 기능 개발</li>
            <li>
              화상수업 관리 페이지 (화상수업 등록, 수정, 수업정보 설정) 생성
            </li>
            <li>온라인 클래스 서비스 404 페이지 제작</li>
            <li>강의 상세 화면 푸리봇 연동(외부업체 협업)</li>
            <li>이용자 매뉴얼 전시기능 개발 및 리뉴얼 담당</li>
            <li>이외의 추가적인 운영 개선사항 대응</li>
          </ul>
          <ul v-else class="bull_list">
            <li>
              전국 초⋅중⋅고 및 기타학교의 교사와 학생이 EBS 학습 콘텐츠를
              활용하여 학교 수업을 대체할 수 있는 원격교육 서비스
            </li>
            <li>
              온라인 개학 학교 교육 플랫폼 운영팀의 일원으로, 국가 재난 상황에서
              학습 공백방지와 학업성취도 제고를 위한 필수 서비스 제공에
              기여하였습니다.
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="popup-footer">
          <button class="popup-button" @click="togglePopup">Close</button>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupCard",
  // typeFlag
  // default : info Popup
  // _numbering
  computed: {
    isOpen() {
      return this.$store.getters.isPopupOpen;
    },
    typeFlag() {
      return this.$store.getters.typeFlag;
    },
  },
  methods: {
    closePopup() {
      this.$store.dispatch("closePopup");
    },
  },
};
</script>

<style>
/* Popup container */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 55px);
  transform: translateX(55px);
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
}

.popup-overlay.show {
  opacity: 1;
  visibility: visible;
}

.popup-content {
  background-color: #3a455d;
  color: #dfe4ea;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-20px);
  opacity: 0;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  max-width: 500px;
  width: 80%;
}

.popup-overlay.show .popup-content {
  transform: translateY(0);
  opacity: 1;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.popup-title {
  margin: 0;
  display: flex;
  gap: 3px;
  align-items: center;
  font-size: 1.5em;
}

.popup-title h2 {
  padding-left: 25px;
  text-indent: -25px;
}

.popup-close {
  font-size: 1.2em;
  cursor: pointer;
  color: #fff;
}

.popup-body {
  padding: 10px 0;
  font-size: 1em;
  word-break: keep-all;
  text-align: left;
}

.popup-body .popup-image {
  background: #fff;
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 1.5em;
  padding: 1.5em 0;
  cursor: pointer;
}

.popup-body .popup-image .img_ebs {
  width: 50%;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
}

.popup-labels {
  max-width: 100%;
}

.popup-labels .labels-container {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  font-style: italic;
}

.popup-labels h3 {
  margin-top: 16px;
  color: #9fadbc;
  font-size: 12px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0;
  margin-bottom: 4px;
  line-height: 20px;
}

.popup-labels .label,
.label {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  min-width: 48px;
  max-width: 100%;
  height: 28px;
  margin-bottom: 0;
  padding: 0 12px;
  overflow: hidden;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.popup-labels .label > img {
  width: 24px;
}

.popup-description .popup-sub-title {
  display: flex;
  position: relative;
  align-items: center;
  min-height: 32px;
  margin: 0 0 4px 28px;
  padding: 8px 0;
}

.popup-description .popup-sub-title i {
  position: absolute;
  left: -31px;
  display: inline-block;
  line-height: 1;
}

.popup-description h3 {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #b6c2cf;
}

.bull_list {
  margin-left: 20px;
}

.bull_list > li {
  position: relative;
  margin-top: 8px;
  padding-left: 8px;
  font-size: 14px;
  line-height: 22px;
}
.bull_list > li:first-child {
  margin: 0;
}
.bull_list > li::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  width: 3px;
  height: 3px;
  background-color: #666;
}

.popup-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.popup-button {
  padding: 8px 16px;
  background-color: #4e6ef2;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.popup-button:hover {
  background-color: #3857cb;
}

@media (max-width: 1024px) {
  .popup-title {
    font-size: 1.25em;
    line-height: 1.25;
  }
}

@media (max-width: 768px) {
  .popup-overlay {
    width: 100%;
    transform: translateX(0px);
  }
  .project-card .project-card-title svg {
    height: 24px;
  }
  .labels-wrapper .label-wrapper {
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  }
  .popup-labels .label,
  .label {
    height: 18px;
    line-height: 18px;
    border-radius: 10px;
    font-size: 12px;
  }
  .bull_list {
    max-height: 200px;
    overflow: auto;
  }
  .bull_list::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .bull_list::-webkit-scrollbar-track {
    background: #666;
    border-radius: 10px;
  }
  .bull_list::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 10px;
  }
  .bull_list::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }
  .description-wrapper .project-description {
    margin-bottom: 1rem;
  }
  .link-wrapper svg {
    width: 20px;
    height: 20px;
  }
}
</style>
