const records = {
    orders: [
        {
            id: 1,
            user: 'johndoe',
            email: 'johndoe@gmail.com',
            time: '2023-11-25T08:30:00',
            total: 100.00,
            items: [
                { id: 1, name: 'Overwatch', price: 50.00 },
                { id: 2, name: 'Red Dead Redemption 2', price: 25.00 },
                { id: 3, name: 'Cyberpunk 2077', price: 25.00 }
            ],
            quantity: 3
        },
        {
            id: 2,
            user: 'johndoe',
            email: 'johndoe@gmail.com',
            time: '2023-11-26T12:45:00',
            total: 75.00,
            items: [
                { id: 4, name: 'Minecraft', price: 30.00 },
                { id: 5, name: 'Fortnite', price: 25.00 },
                { id: 6, name: 'Assassin\'s Creed Valhalla', price: 20.00 }
            ],
            quantity: 3
        },
        {
            id: 3,
            user: 'johndoe',
            email: 'johndoe@gmail.com',
            time: '2023-11-27T14:20:00',
            total: 120.00,
            items: [
                { id: 7, name: 'Among Us', price: 15.00 },
                { id: 8, name: 'Stardew Valley', price: 40.00 },
                { id: 9, name: 'Celeste', price: 65.00 }
            ],
            quantity: 3
        },
        {
            id: 4,
            user: 'johndoe',
            email: 'johndoe@gmail.com',
            time: '2023-11-28T18:10:00',
            total: 90.00,
            items: [
                { id: 10, name: 'The Legend of Zelda: Breath of the Wild', price: 60.00 },
                { id: 1, name: 'Overwatch', price: 30.00 }
            ],
            quantity: 2
        },
        {
            id: 5,
            user: 'johndoe',
            email: 'johndoe@gmail.com',
            time: '2023-11-29T22:00:00',
            total: 110.00,
            items: [
                { id: 5, name: 'Fortnite', price: 50.00 },
                { id: 4, name: 'Minecraft', price: 30.00 },
                { id: 2, name: 'Red Dead Redemption 2', price: 30.00 }
            ],
            quantity: 3
        }
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    let sortOrdersBy = '';
    let sortGamesBy = '';
    let ordersReversed = false;
    let gamesReversed = false;
  
    function renderOrders() {
      const ordersTableBody = document.getElementById('orders-table-body');
      ordersTableBody.innerHTML = '';
  
      const orders = [...records.orders].sort((a, b) => {
        if (sortOrdersBy === 'time') {
          return ordersReversed ? b.time.localeCompare(a.time) : a.time.localeCompare(b.time);
        } else if (sortOrdersBy === 'total') {
          return ordersReversed ? b.total - a.total : a.total - b.total;
        } else {
          return 0;
        }
      });
  
      orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${order.id}</td>
          <td>${order.user}</td>
          <td>${order.email}</td>
          <td>${order.time}</td>
          <td>${order.quantity}</td>
          <td>${order.total}</td>
          <td>
            <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapse-${order.id}">View Games</button>
            <div class="collapse" id="collapse-${order.id}">
              <table class="table table-striped table-bordered table-hover" style="white-space: nowrap;">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  ${order.items
                    .sort((a, b) => (sortGamesBy === 'price' ? (gamesReversed ? b.price - a.price : a.price - b.price) : 0))
                    .map(
                      item => `
                      <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                      </tr>
                    `
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </td>
        `;
        ordersTableBody.appendChild(row);
      });
    }
  
    function selectSortOrdersBy(e) {
      sortOrdersBy = e.target.value;
      renderOrders();
    }
  
    function selectSortGamesBy(e) {
      sortGamesBy = e.target.value;
      renderOrders();
    }
  
    function toggleOrdersReversed() {
      ordersReversed = !ordersReversed;
      renderOrders();
    }
  
    function toggleGamesReversed() {
      gamesReversed = !gamesReversed;
      renderOrders();
    }
  
    document.querySelector('input[name="orders"][value="none"]').checked = true;
    document.querySelector('input[name="games"][value="none"]').checked = true;
    document.querySelectorAll('input[name="orders"]').forEach(radio =>
      radio.addEventListener('change', selectSortOrdersBy)
    );
    document.querySelectorAll('input[name="games"]').forEach(radio =>
      radio.addEventListener('change', selectSortGamesBy)
    );
    document.getElementById('orderReversed').addEventListener('change', toggleOrdersReversed);
    document.getElementById('gameReversed').addEventListener('change', toggleGamesReversed);
  
    renderOrders();
  });
  