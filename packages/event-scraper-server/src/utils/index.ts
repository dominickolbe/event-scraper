import puppeteer from "puppeteer";

export const getEvent = async (id: number) => {
  const event = {
    id: id,
    date: "",
    title: "",
    venue: "",
    description: "",
  };

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.residentadvisor.net/events/" + id);

  event.title = await page.evaluate(
    //@ts-ignore
    () => document.querySelector("#sectionHead h1").innerText
  );

  event.description = await page.evaluate(
    //@ts-ignore
    () => document.querySelector("#event-detail .left").innerText
  );

  event.venue = await page.evaluate(
    () =>
      //@ts-ignore
      document.querySelector("#detail > ul > li:nth-child(1) > a").innerText
  );

  event.date = await page.evaluate(
    //@ts-ignore
    () => document.querySelector("#detail > ul > li.wide > a").innerText
  );

  await browser.close();

  return event;
};
