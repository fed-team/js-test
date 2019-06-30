const users = [
  { id: 2, name: "Reilly Beach", lastly: "19:23 23.04.2019" },
  { id: 3, name: "Duncan Contreras", lastly: "20:05 05.03.2015" },
  { id: 4, name: "Eddie Potts", lastly: "08:51 23.06.2018" },
  { id: 5, name: "Jeannette Evans", lastly: "20:08 29.11.2017" },
  { id: 6, name: "Effie Knowles", lastly: "12:00 13.04.2017" },
  { id: 7, name: "Effie Knowles", lastly: "12:00 13.04.2017" },
  { id: 8, name: "Jaclyn Hopper", lastly: "18:00 08.01.2017" },
  { id: 9, name: "Barlow Combs", lastly: "16:00 30.12.2015" },
  { id: 10, name: "Summer Hardy", lastly: "11:09 12.11.2017" },
  { id: 11, name: "Tracie Cline", lastly: "17:10 09.11.2015" },
  { id: 12, name: "Tracie Cline", lastly: "17:10 09.11.2015" },
  { id: 13, name: "Tracie Cline", lastly: "17:10 09.11.2015" },
  { id: 14, name: "Sylvia Harveyt", lastly: "20:11 12.02.2018" },
  { id: 15, name: "Wilcox Santana", lastly: "20:11 15.07.2017" },
  { id: 16, name: "Sonja Mercer", lastly: "13:11 12.01.2017" },
  { id: 17, name: "Lucas Bartlett", lastly: "15:11 04.02.2015" },
  { id: 18, name: "Alta Hahn", lastly: "12:11 16.12.2014" },
  { id: 19, name: "Alta Hahn", lastly: "12:11 16.12.2014" },
  { id: 20, name: "Alta Hahn", lastly: "12:11 16.12.2014" },
  { id: 21, name: "Sheena Chapman", lastly: "21:11 04.10.2015" },
  { id: 22, name: "Barbra Gibson", lastly: "08:15 08.07.2016" },
  { id: 23, name: "Carmen Lyons", lastly: "23:12 29.11.2017" },
  { id: 24, name: "Carmen Lyons", lastly: "23:12 29.11.2017" },
  { id: 25, name: "Chase Eaton", lastly: "16:12 31.10.2015" },
  { id: 26, name: "Oneal Michael", lastly: "15:12 26.08.2015" },
  { id: 27, name: "Jennings Caldwell", lastly: "19:12 14.04.2016" },
  { id: 28, name: "Sullivan Cabrera", lastly: "01:00 01.01.1970" },
  { id: 29, name: "Alexandra Nguyen", lastly: "01:00 01.01.1970" },
  { id: 30, name: "Woods Marks", lastly: "23:12 22.02.2015" },
  { id: 31, name: "Nellie Le", lastly: "23:12 22.02.2015" },
  { id: 32, name: "Solomon Vang", lastly: "10:13 30.11.2017" },
  { id: 33, name: "Adela Knight", lastly: "01:13 03.04.2015" },
  { id: 34, name: "Adela Knight", lastly: "01:13 03.04.2015" },
  { id: 47, name: "Adela Knigt", lastly: "01:13 03.04.2015" },
  { id: 35, name: "Adela Knight", lastly: "01:13 03.04.2015" },
  { id: 36, name: "Rachael Hopper", lastly: "21:00 12.09.2016" },
  { id: 37, name: "Karin Buck", lastly: "08:13 04.06.2016" },
  { id: 38, name: "Crosby Vaughan", lastly: "22:20 02.08.2015" },
  { id: 39, name: "Crosby Vaughan", lastly: "22:20 02.08.2015" },
  { id: 40, name: "Willis Ross", lastly: "01:13 06.01.2017" },
  { id: 41, name: "Mavis James", lastly: "22:13 03.10.2015" },
  { id: 42, name: "Lana Clay", lastly: "01:00 01.01.1970" },
  { id: 43, name: "Lana Clay", lastly: "01:00 01.01.1970" },
  { id: 44, name: "Helga Glenn", lastly: "01:00 01.01.1970" },
  { id: 45, name: "Mays Noel", lastly: "00:00 18.04.2017" },
  { id: 46, name: "Solomon Vang", lastly: "10:13 30.11.2017" }
];

const newUsers = [];
const today = new Date();
const handleUsersData = () => {
  users.forEach(user => {
    const dateParser = user.lastly.slice(6).split(".");
    const dateOfPost = new Date(
      `${dateParser[2]}-${dateParser[1]}-${dateParser[0]}`
    );

    const timeFromPost = Math.floor(
      ((dateOfPost - today) * -1) / 1000 / 60 / 60 / 24
    );

    const name = user.name;
    const index = newUsers.findIndex(user => user.name === name);
    if (index === -1) {
      user.id -= 1;
      user.online = timeFromPost <= 30;
      if (timeFromPost < 1) {
        user.lastly = `today at ${user.lastly.slice(0, 5)}`;
      } else if (timeFromPost < 2) {
        user.lastly = `yesterday at ${user.lastly.slice(0, 5)}`;
      } else {
        user.lastly;
      }
      newUsers.push(user);
    }
  });
  console.log(newUsers);
};

handleUsersData();
