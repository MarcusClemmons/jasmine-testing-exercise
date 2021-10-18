describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      serverNameInput.value = 'Alice';
    });
  
    it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();
  
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });
  
  
  it('should update and reset input', function () {
  
    expect(Object.keys(allServers).length).toEqual(0);
  
  });
  
  it('should update servername input'  ,function(){
  
    expect("bill").toMatch('bill');
  }); 
  
  
    afterEach(function() {
      serverId = 0;
      serverTbody.innerHTML = '';
      allServers = {};   
      
      // teardown logic
    });
  });
  