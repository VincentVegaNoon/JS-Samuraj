function lesson2(lessonNumber) {
  return new Promise((resolve, reject) => {
    console.log(`I am learning lesson ${lessonNumber}`);
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

(async () => {
  await lesson2(1);
  await lesson2(2);
  await lesson2(3);
  await lesson2(4);
  await lesson2(5);
  await lesson2(6);
  await lesson2(7);
  await lesson2(8);
  await lesson2(9);
  await lesson2(10);
  console.log("koniec");
})();
// learnLesson();
