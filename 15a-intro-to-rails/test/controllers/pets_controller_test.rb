require 'test_helper'

class PetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pets_index_url
    assert_response :success
  end

  test "should get show" do
    get pets_show_url
    assert_response :success
  end

end
