<template>
  <div class="board">
    <div class="board-header">
      <div class="board-title">
        <h2>EBS OC 운영팀 파견 근무</h2>
        <i class="material-icons error-icon" @click="togglePopup()">error</i>
      </div>
      <p class="mt10">※ 온라인 교육 플랫폼의 개발 및 운영에 대한 깊은 이해를 쌓았으며,<br/>사용자 중심의 서비스 제공과 문제 해결 능력을 배양하였습니다.</p>
    </div>

    <div class="lists-container">
      <div class="list">
        <div class="list-header">
          <h3>Front-End</h3>
        </div>

        <div class="cards">
          <div class="card" @click="togglePopup('1')">
            <div class="card-header">
              <div class="card_color-label label-green">
              </div>
              <h4>#1 프론트엔드 개발</h4>
            </div>
            <div class="card-details">
              <div class="card-actions">
                <div class="card-date">
                  <i class="material-icons fz16 schedule-icon">schedule</i>
                  <span class="fz12 pl5 pr5">{{ formattedDate }}</span>
                </div>
                <div class="card-member">
                  <img src="../assets/card_member.jpeg" alt="카드 멤버 사진">
                </div>
              </div>
            </div>
          </div>
          <div class="card" @click="togglePopup('2')">
            <div class="card-header">
              <div class="card_color-label label-yellow">
              </div>
              <h4>#2 서비스 운영 및 유지보수</h4>
            </div>
            <div class="card-details">
              <div class="card-actions">
                <div class="card-date">
                  <i class="material-icons fz16 schedule-icon">schedule</i>
                  <span class="fz12 pl5 pr5">{{ formattedDate }}</span>
                </div>
                <div class="card-member">
                  <img src="../assets/card_member.jpeg" alt="카드 멤버 사진">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="cards">
          <div class="card" @click="togglePopup('3')">
            <div class="card-header">
              <div class="card_color-label label-red">
              </div>
              <h4>#3 프로젝트 관리 및 협업</h4>
            </div>
            <div class="card-details">
              <div class="card-actions">
                <div class="card-date">
                  <i class="material-icons fz16 schedule-icon">schedule</i>
                  <span class="fz12 pl5 pr5">{{ formattedDate }}</span>
                </div>
                <div class="card-member">
                  <img src="../assets/card_member.jpeg" alt="카드 멤버 사진">
                </div>
              </div>
            </div>
          </div>
          <div class="card" @click="togglePopup('4')">
            <div class="card-header">
              <div class="card_color-label label-purple">
              </div>
              <h4>#4 세부 담당 업무</h4>
            </div>
            <div class="card-details">
              <div class="card-actions">
                <div class="card-date">
                  <i class="material-icons fz16 schedule-icon">schedule</i>
                  <span class="fz12 pl5 pr5">{{ formattedDate }}</span>
                </div>
                <div class="card-member">
                  <img src="../assets/card_member.jpeg" alt="카드 멤버 사진">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- Popup Layer -->
    <popup-card :isOpen="showPopup" @close="closePopup" :typeFlag="typeFlag"/>
  </div>
</template>


<script>
import PopupCard from './PopupCard';
export default {
  name: "CardLists",
  data() {
    return {
      formattedDate: "",
      showPopup: false,
      typeFlag: '',
    };
  },
  components: {
    PopupCard
  },
  mounted() {
    this.getFormattedDate();
  },
  methods: {
    togglePopup(type) {
      if (type) {
        this.typeFlag = type
      } else {
        this.typeFlag = '';
      }
      this.showPopup = !this.showPopup;
    },
    closePopup() {
      this.showPopup = false;
    },
    getFormattedDate() {
      const today = new Date();
      const options = { month: "short", day: "numeric" };
      this.formattedDate = today.toLocaleDateString("en-US", options);
    },
  },
};
</script>
<style scoped>
.board {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #171c28;
  color: #dfe4ea;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.board-header {
  padding: 10px;
  background-color: #2d364d;
  color: #ffffff;
  text-align: center;
  border-radius: 4px 4px 0 0;
  line-height: 1.2;
}

.board-header .board-title{
  display: flex;
  justify-content: center;
  gap: 10px;
}

.lists-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: flex-end;
  gap:12px;
}

.list {
  width: 30%;
  min-width: 250px;
  background-color: #222b3a;
  color: #dfe4ea;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
}

.list-header {
  padding: 10px;
  background-color: #2d364d;
  color: #ffffff;
  text-align: center;
  border-radius: 4px 4px 0 0;
}

.card {
  background-color: #2d364d;
  color: #dfe4ea;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  cursor: pointer;
}

.card:hover{
  border-color:#c5e1ff;
}

.card-header {
  padding: 10px;
  background-color: #3a455d;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 4px 4px 0 0;
  line-height: 1.5;
  margin-bottom: 10px;
}

.card-header .card_color-label{
  display: inline-flex;
  width: 40px;
  height: 8px;
  border-radius: 4px;
  margin-bottom: 4px;
}

.card-details {
  padding: 10px;
}

.card-details p{
  line-height: 1.5;
}
.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.card-date{
  line-height: 1.1;
}

.card-member{
  width: 24px;
  height: 24px;
  background: #000;
  border-radius: 50%;
  overflow:hidden;
}

.card-member img{
  width:100%;
  height:100%;
  object-fit:cover;
  transition-duration: 0.3s;
}

.card-member img:hover{
  transform: scale(1.2, 1.2); transition-duration: 0.5s;
}

.action-button {
  padding: 6px 12px;
  background-color: #4e6ef2;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-list,
.add-card {
  margin-top: 10px;
  text-align: center;
}

.add-list-button,
.add-card-button {
  padding: 8px 16px;
  background-color: #4e6ef2;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-list-button:hover,
.add-card-button:hover {
  background-color: #3857cb;
}

/* Error icon */
.error-icon {
  font-size: 16px;
  cursor: pointer;
}
/* mark */
.accent{
  font-weight: 700;
  color: #228efe;
  /* text-decoration: underline; */
}
</style>
