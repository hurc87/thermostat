$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperture();

  $('#temperature-up').click(function(){
    thermostat.up();
    updateTemperture();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperture();
  });

  $('#temperature-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperture();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    updateTemperture();
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    updateTemperture();
  });

  function updateTemperture(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
})
