require 'test_helper'

class ShowControllerTest < ActionDispatch::IntegrationTest
  test "should get edit" do
    get show_edit_url
    assert_response :success
  end

  test "should get new" do
    get show_new_url
    assert_response :success
  end

  test "should get index" do
    get show_index_url
    assert_response :success
  end

end
