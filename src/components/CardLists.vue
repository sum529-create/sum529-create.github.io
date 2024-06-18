<template>
  <div class="board">
    <div class="board-header">
      <h2>EBS OC 운영</h2>
    </div>

    <div class="lists-container">
      <div class="list">
        <div class="list-header">
          <h3></h3>
        </div>

        <div class="cards">
          <div class="card">
            <div class="card-header">
              <h4>Project A</h4>
            </div>
            <div class="card-details">
              <p>Description: Lorem ipsum dolor sit amet...</p>
              <p>Due Date: 2024-06-30</p>
              <div class="card-actions">
                <button class="action-button">Details</button>
                <button class="action-button">Delete</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h4>Project A</h4>
            </div>
            <div class="card-details">
              <p>Description: Lorem ipsum dolor sit amet...</p>
              <p>Due Date: 2024-06-30</p>
              <div class="card-actions">
                <button class="action-button">Details</button>
                <button class="action-button">Delete</button>
              </div>
            </div>
          </div>
          <div class="add-card">
            <button class="add-card-button">+ Add Card</button>
          </div>
        </div>
      </div>

      <div class="add-list">
        <button class="add-list-button">+ Add List</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardLists",
  methods: {
    addList() {
      // 추가 리스트 기능 구현
      console.log("Add List clicked");
    },
    addCard() {
      // 추가 카드 기능 구현
      console.log("Add Card clicked");
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
}

.lists-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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

.cards {
  margin-top: 10px;
}

.card {
  background-color: #2d364d;
  color: #dfe4ea;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin-bottom: 10px;
}

.card-header {
  padding: 10px;
  background-color: #3a455d;
  color: #ffffff;
  text-align: center;
  border-radius: 4px 4px 0 0;
}

.card-details {
  padding: 10px;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
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
</style>
