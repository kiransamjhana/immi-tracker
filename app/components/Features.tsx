import React from "react";

const Features = () => {
  return (
    <div className="bg-white-50 py ">
      <section
        id="features"
        className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20"
      >
        <hr />
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center bg-slate-50 mb-5">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Choose the features you want to start from the following options.
            Remember ! you&apos;sre helping other students like you while
            you&apos;sre sharing your own story. We are all in this together.
            Sharing is caring.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-green-100 select-none hover:shadow hover:shadow-teal-100 p-2">
            <div className="flex flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Visa tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Track your visa lodgment
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-green-100 select-none hover:shadow hover:shadow-teal-100 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Expression of Interest(EOI)</h3>
                <p className="text-sm">
                  Expression of interest to different state
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-green-100 select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between bg-black-200 rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Story</h3>
                <p className="text-sm text-muted-foreground">
                  Share your beautiful migraiton story here !
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-green-100 select-none hover:shadow hover:shadow-teal-100 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Blogs</h3>
                <p className="text-sm text-muted-foreground">
                  Blogs about mirgration. You can write one too.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-green-100 select-none hover:shadow hover:shadow-teal-100 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Migration News</h3>
                <p className="text-sm text-muted-foreground">
                  Recent News about migration
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-green-100 select-none hover:shadow hover:shadow-teal-100 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Book Migration Agent</h3>
                <p className="text-sm text-muted-foreground">
                  Top-Migration agent from Australia. You will be guided to your
                  dream in Australia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
