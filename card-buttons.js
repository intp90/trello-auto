window.TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828911.png',
      text: '연차 기록 전송',
      callback: function (t) {
        return t.card('name', 'id', 'desc')
          .then(function (card) {
            const payload = {
              cardId: card.id,
              cardName: card.name,
              cardDesc: card.desc
            };

            return fetch('https://script.google.com/macros/s/AKfycbwhcuRjiAhoZD1-zwyAUGyhpO_Ol3yHel8IrZDvoS5keYz0gE2k8agafCstR2_rU3EX/exec', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            })
              .then(() => t.alert({ message: '✅ 시트 전송 완료!' }))
              .catch(() => t.alert({ message: '❌ 전송 실패!' }));
          });
      }
    }];
  }
});
