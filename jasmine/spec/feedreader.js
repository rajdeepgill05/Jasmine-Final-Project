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
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        })

        it('URL is defined and is  not empty', function(){
            for(const feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toEqual('');
            }
            
        })

        it('NAME is defined and is not empty', function(){
            for(const feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toEqual('');
            }
            
        })
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });

/* TODO: Write a new test suite named "The menu" */

    describe('theMenu', function(){
        it('Menu Should remain hidden on default', function(){
            expect(document.body.className).toBe('menu-hidden');
        })

        it('Menu should pop-up on click and hide back on click', function(){
            let menuBtn = document.querySelector('.menu-icon-link');
            menuBtn.click();
            expect(document.body.className).toBe('');
            menuBtn.click();
            expect(document.body.className).toBe('menu-hidden');
        })


    });
    

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('InitialEntries', function(){
        beforeEach(function(done){
            loadFeed(3, function(){
                done();
            })
        })
        it('checks if ".feed"-container is not empty on the execution of loadFeed Function', function(done){
            expect(document.querySelectorAll('.feed-list').length).toBeGreaterThan(0);
            done();
        });
        


    });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('newFeedSelection', function(){
        beforeEach(function(done){
            loadFeed(2, function(){
                done();
            })
        })
        it('New Feed is Loaded ', function(done){
            
            
            expect().toBe();
            done();
        })
    });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
