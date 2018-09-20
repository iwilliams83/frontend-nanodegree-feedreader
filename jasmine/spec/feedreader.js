/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         function checkForUrl(feed){
           it('ensures url is defined and is not empty', function(){
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           })
         }

         allFeeds.forEach(feed => {
           checkForUrl(feed)
         })

         // alternative - using for...of:
         // for (let feed of allFeeds) {
         //   checkForUrl(feed);
         // }


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         function checkForName(feed){
           it('ensures name is defined and is not empty', function(){
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           })
         }

         allFeeds.forEach(feed => {
           checkForName(feed)
         })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('checks that menu is hidden by default', function(){
           expect($('body').hasClass('menu-hidden')).toBe(true);
         })


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu item can be toggled between hidden and visible', function(){
            $('menu-icon-link').on('click', function(){
              expect($('body').hasClass('menu-hidden')).toBe(false);
            })

            $('menu-icon-link').on('click', function(){
              expect($('body').hasClass('menu-hidden')).toBe(true);
            })
          })
      });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
        */
         beforeEach(function(done){
           loadFeed(0, function(){
             done();
           })
         })

         it('should have at least one entry', function(done){
           //$('.feed .entry') returns an array of 'entry' elements,
           //check see if it has at least one element:
           expect($('.feed .entry').length > 0).toBe(true);
           done();
         })

  });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         beforeEach(function(done){
           loadFeed(0, function(){
             done();
           })
         })

         it('should be different from previous feed', function(done){
           // save content of first feed into a variable
           let firstFeed = $('.feed .entry')
           //check first feed content against second feed content
           loadFeed(1, function(){
             expect($('.feed .entry') !== firstFeed).toBe(true);
             done();
           })
         })
   });

}());
